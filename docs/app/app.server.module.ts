import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { NgdAppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [NgdAppComponent],
})
export class AppServerModule {}
