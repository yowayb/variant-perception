Investment application prototype to learn and experiment with next.js.
- Header and sidebar do nothing.
- The first chart is a nivo component, rendering in the browser.
- Insights are excerpts of posts from the Variant Perception blog.  You can click on those.
- The second chart is statically rendered using d3.js within a React Server Component.  This is the most interesting bit which I spent the most time on because nivo is stale and can't statically render charts.  This exercise helps me understand React and next.js on a deeper level.  Next I want to hydrate the chart for interactivity.
