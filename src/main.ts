import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let dateInit = new Date();
  (1609304400000 >= dateInit.getTime())?
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err)):''
