<script>
import "reveal.js/plugin/highlight/monokai.css";

export default {
  name: "VueDemoCodeHostRouter",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>THE ROUTER ADAPTATION</h5>
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
    component: WrapperComponent,
    data: { 
      loadChildren: () => import('mfe/module'),
      elementName: 'mfe-web-component' 
    }
  }];
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