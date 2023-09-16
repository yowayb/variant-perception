import { promises as fs } from 'fs';
import { cache } from 'react'
import { parse } from 'csv-parse/sync';
import path from 'path';
import 'server-only'

export const revalidate = 24 * 60 * 60 // revalidate data every day
const dataDirectory = path.join(process.cwd(), 'data');

interface DataPoint {
  id: string;
  data: [{ x: string, y: string }]
}

export const getData = cache(async (name: string) => {
  const csv = await fs.readFile(`${dataDirectory}/${name}.csv`);
  const records = parse(csv, { bom: true, columns: true });
  const transformed: DataPoint[] = [];
  let id = '';
  let length = 0;
  for (const r of records) {
    if (id != r["LOCATION"]) {
      length = transformed.push({
        id: r["LOCATION"],
        data: [{ x: r["TIME"], y: r["Value"] }]
      });
      id = r["LOCATION"];
    } else {
      transformed[length - 1].data.push({ x: r["TIME"], y: r["Value"] })
    }
  }
  return transformed;
})
