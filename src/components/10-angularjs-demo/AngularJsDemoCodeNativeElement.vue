<script>
import "reveal.js/plugin/highlight/monokai.css";

export default {
  name: "AngularJsDemoCodeNativeElement",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>ENCAPSULATION EN WEBCOMPONENT</h5>
    </div>
    <div class="code-col-grid">
      <div class="code-col">
        <div class="text-base self-start"># main.js</div>
        <pre>
        <code class="js">
export class Mfe extends HTMLElement {
  connectedCallBack() {
    const root = document.createElement('mfe-component');
    this.appendChild(root);
    angular.bootstrap(root, ['app']);
  }
}
customElements.define('mfe-web-component', Mfe);
        </code>
        </pre>
      </div>

   <div class="code-col">
        <div class="text-base self-start"># webpack.config.js</div>
        <pre>
        <code class="js">
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// Other config goes here

plugins: [
  new ModuleFederationPlugin({

    // For remotes (please adjust)
    name: "mfe",
    library: {type: 'var', name: 'mfe'},
    filename: "remoteEntry.js",
    exposes: {
      './module': './/src/index.js',
    },
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
    </div>
  </div>
</template>

<style>
</style>