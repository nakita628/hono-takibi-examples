import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAppsAppIdRoute,
  getApiAppsAppIdRoute,
  getApiAppsCategoriesRoute,
  getApiAppsInstalledRoute,
  getApiAppsLogsRoute,
  getApiAppsMarketplaceRoute,
  getAppIdLogsRoute,
  getAppsBuildExternalAppRequestRoute,
  getAppsCountRoute,
  postApiAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageAppsHandler = app
  .openapi(postApiAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppsMarketplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppsInstalledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsBuildExternalAppRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
