import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsDashboardApiV1WidgetItemsRoute,
  getOcsV2PhpAppsDashboardApiV1WidgetsRoute,
  getOcsV2PhpAppsDashboardApiV2WidgetItemsRoute,
  getOcsV2PhpAppsDashboardApiV3LayoutRoute,
  getOcsV2PhpAppsDashboardApiV3StatusesRoute,
  postOcsV2PhpAppsDashboardApiV3LayoutRoute,
  postOcsV2PhpAppsDashboardApiV3StatusesRoute,
} from './routes'
import {
  getOcsV2PhpAppsDashboardApiV1WidgetItemsRouteHandler,
  getOcsV2PhpAppsDashboardApiV1WidgetsRouteHandler,
  getOcsV2PhpAppsDashboardApiV2WidgetItemsRouteHandler,
  getOcsV2PhpAppsDashboardApiV3LayoutRouteHandler,
  getOcsV2PhpAppsDashboardApiV3StatusesRouteHandler,
  postOcsV2PhpAppsDashboardApiV3LayoutRouteHandler,
  postOcsV2PhpAppsDashboardApiV3StatusesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsDashboardApiV1WidgetItemsRoute,
    getOcsV2PhpAppsDashboardApiV1WidgetItemsRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsDashboardApiV2WidgetItemsRoute,
    getOcsV2PhpAppsDashboardApiV2WidgetItemsRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsDashboardApiV1WidgetsRoute,
    getOcsV2PhpAppsDashboardApiV1WidgetsRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsDashboardApiV3LayoutRoute,
    getOcsV2PhpAppsDashboardApiV3LayoutRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsDashboardApiV3LayoutRoute,
    postOcsV2PhpAppsDashboardApiV3LayoutRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsDashboardApiV3StatusesRoute,
    getOcsV2PhpAppsDashboardApiV3StatusesRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsDashboardApiV3StatusesRoute,
    postOcsV2PhpAppsDashboardApiV3StatusesRouteHandler,
  )

export default app
