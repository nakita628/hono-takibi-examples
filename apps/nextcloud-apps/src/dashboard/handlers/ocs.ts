import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsDashboardApiV1WidgetItemsRoute,
  getOcsV2PhpAppsDashboardApiV1WidgetsRoute,
  getOcsV2PhpAppsDashboardApiV2WidgetItemsRoute,
  getOcsV2PhpAppsDashboardApiV3LayoutRoute,
  getOcsV2PhpAppsDashboardApiV3StatusesRoute,
  postOcsV2PhpAppsDashboardApiV3LayoutRoute,
  postOcsV2PhpAppsDashboardApiV3StatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(getOcsV2PhpAppsDashboardApiV1WidgetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDashboardApiV2WidgetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDashboardApiV1WidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDashboardApiV3LayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsDashboardApiV3LayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsDashboardApiV3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsDashboardApiV3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
