<script>
import "reveal.js/plugin/highlight/monokai.css";

export default {
  name: "VueDemoCodeHostWrapper",
};
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>COMPOSANT WRAPPER</h5>
    </div>
    <div class="code-col-grid single-col">
      <div class="code-col">
        <div class="text-base self-start"># app-routing.module.ts</div>
        <pre>
        <code class="js">
import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  template: `&lt;div #vc&gt;&lt;/div&gt;`,
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  async ngAfterContentInit(): Promise&lt;void&gt; {
    const elementName = this.route.snapshot.data['elementName'];
    const loader = this.route.snapshot.data['loadChildren'];

    await loader();
    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);
  }
}
        </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>