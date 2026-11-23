import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsAppstoreApiV1AppsCategoriesRoute,
  getOcsV2PhpAppsAppstoreApiV1AppsRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsDisableRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsEnableRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsUninstallRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsUpdateRoute,
  postOcsV2PhpAppsAppstoreApiV1BundlesEnableRoute,
} from './routes'
import {
  getOcsV2PhpAppsAppstoreApiV1AppsCategoriesRouteHandler,
  getOcsV2PhpAppsAppstoreApiV1AppsRouteHandler,
  postOcsV2PhpAppsAppstoreApiV1AppsDisableRouteHandler,
  postOcsV2PhpAppsAppstoreApiV1AppsEnableRouteHandler,
  postOcsV2PhpAppsAppstoreApiV1AppsUninstallRouteHandler,
  postOcsV2PhpAppsAppstoreApiV1AppsUpdateRouteHandler,
  postOcsV2PhpAppsAppstoreApiV1BundlesEnableRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsAppstoreApiV1AppsCategoriesRoute,
    getOcsV2PhpAppsAppstoreApiV1AppsCategoriesRouteHandler,
  )
  .openapi(getOcsV2PhpAppsAppstoreApiV1AppsRoute, getOcsV2PhpAppsAppstoreApiV1AppsRouteHandler)
  .openapi(
    postOcsV2PhpAppsAppstoreApiV1AppsEnableRoute,
    postOcsV2PhpAppsAppstoreApiV1AppsEnableRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsAppstoreApiV1AppsDisableRoute,
    postOcsV2PhpAppsAppstoreApiV1AppsDisableRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsAppstoreApiV1AppsUninstallRoute,
    postOcsV2PhpAppsAppstoreApiV1AppsUninstallRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsAppstoreApiV1AppsUpdateRoute,
    postOcsV2PhpAppsAppstoreApiV1AppsUpdateRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsAppstoreApiV1BundlesEnableRoute,
    postOcsV2PhpAppsAppstoreApiV1BundlesEnableRouteHandler,
  )

export default app
