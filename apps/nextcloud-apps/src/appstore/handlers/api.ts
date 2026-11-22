import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsAppstoreApiV1AppsCategoriesRoute,
  getOcsV2PhpAppsAppstoreApiV1AppsRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsDisableRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsEnableRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsUninstallRoute,
  postOcsV2PhpAppsAppstoreApiV1AppsUpdateRoute,
  postOcsV2PhpAppsAppstoreApiV1BundlesEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getOcsV2PhpAppsAppstoreApiV1AppsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppstoreApiV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppstoreApiV1AppsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppstoreApiV1AppsDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppstoreApiV1AppsUninstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppstoreApiV1AppsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppstoreApiV1BundlesEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
