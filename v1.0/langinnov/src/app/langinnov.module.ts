import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BlogComponent } from './blog/blog.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BlogComponent,
    UnderConstructionComponent,
  ],
  imports: [
    CoreModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
