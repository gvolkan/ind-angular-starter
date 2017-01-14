import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppBrowserModule } from './app/app.browser.module';
import { decorateModuleRef } from './app/environment.browser';

// Boot the application, either now or when the DOM content is loaded
const platform = platformBrowserDynamic();

// Enable either Hot Module Reloading or production mode
const hotModule = module.hot;

if (hotModule) {
    hotModule.accept();
    hotModule.dispose(() => { platform.destroy(); });
} 
else {
    enableProdMode();
}

const bootApplication = () => {
    return platform.bootstrapModule(AppBrowserModule)
        .then(decorateModuleRef)
        .catch(err => console.error(err));
};

if (document.readyState === 'complete') {
    bootApplication();
} 
else {
    document.addEventListener('DOMContentLoaded', bootApplication);
}
