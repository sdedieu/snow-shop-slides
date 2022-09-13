<script>
import "reveal.js/plugin/highlight/monokai.css";

export default {
  name: "Config",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>WEBPACK MODULE FEDERATION</h5>
    </div>
<div class="code-col-grid">
       <div class="code-col">
        <h4>Remote</h4>
        <div class="text-base self-start"># webpack.config.js</div>
        <pre>
        <code class="js">
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin"); 
// Other config goes here 
plugins: [ 
  new ModuleFederationPlugin({ 
    // For remotes (please adjust) 
    name: "mfe", 
    filename: "remoteEntry.js",
    exposes: { './module': './/src/app/app.module.ts', }, 
    shared: share({
      // Shared libs goes there 
      ...sharedMappings.getDescriptors() 
    }) 
  }),
  sharedMappings.getPlugin() 
],
        </code>
        </pre>
      </div>
    <div class="code-col">
        <h4>Host</h4>
        <div class="text-base self-start"># webpack.config.js</div>
        <pre>
        <code class="js">
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// Other config goes here
plugins: [
  new ModuleFederationPlugin({
    // For hosts (please adjust)
    remotes: {
      'mfe':'mfe@http://localhost:4201/remoteEntry.js'
    },
    shared: share({
      // Shared libs goes there
      ...sharedMappings.getDescriptors()
    })
  }),
  ...sharedMappings.getPlugin()
],  
        </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<style>
</style>