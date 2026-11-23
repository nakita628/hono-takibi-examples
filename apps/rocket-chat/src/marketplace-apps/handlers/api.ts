import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAppsAppIdRoute,
  getApiAppsAppIdRoute,
  getApiAppsCategoriesRoute,
  getApiAppsInstalledRoute,
  getApiAppsLogsRoute,
  getApiAppsMarketplaceRoute,
  postApiAppsPublicAppIdIncomingRoute,
  postApiAppsPublicAppIdTemplateMessageRoute,
  postApiAppsRoute,
  postApiV1VideoConferenceJitsiUpdateTimeoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiAppsPublicAppIdIncomingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAppsPublicAppIdTemplateMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceJitsiUpdateTimeoutRoute, (c) => {
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
  .openapi(getApiAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
