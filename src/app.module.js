/**
 * The main entry point into the application
 * @module app
 */
import angular from 'angular';
import api from './api/api.module';
import components from './components/components.module';
import core from './core/core.module';
import routes from './routes/routes.module';
import services from './services/services.module';
import views from './views/views.module';

export const APP_NAME = 'app';

export default const app = angular.module(APP_NAME, [
        api.NAME,
        components.NAME,
        core.NAME,
        routes.NAME,
        services.NAME,
        views.NAME
    ]);
