<script>
import "reveal.js/plugin/highlight/monokai.css";

export default {
  name: "AngularDemoCode",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>ADAPTATION DU ROUTER</h5>
    </div>
<div class="code-col-grid">
      <div class="code-col">
        <div class="text-base"># app-routing.module.ts</div>
        <pre>
        <code class="js">
const routes: Routes = [
  // Others routes goes there
  { 
    path:'mfe', 
    loadChildren: () => import('mfe/module').then(m => m.MfeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
        </code>
        </pre>
      </div>

  <div class="code-col">
        <div class="text-base"># decl.d.ts</div>
        <pre>
        <code class="js">
declare module 'mfe/module';
        </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<style>
</style>