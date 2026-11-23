import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicApiVersioningTest202609WidgetsWidgetIdRoute,
  getPublicApiVersioningTest202609WidgetsRoute,
  getPublicApiVersioningTest202609WidgetsWidgetIdRoute,
  postPublicApiVersioningTest202609WidgetsRoute,
  putPublicApiVersioningTest202609WidgetsWidgetIdRoute,
} from './routes'
import {
  deletePublicApiVersioningTest202609WidgetsWidgetIdRouteHandler,
  getPublicApiVersioningTest202609WidgetsRouteHandler,
  getPublicApiVersioningTest202609WidgetsWidgetIdRouteHandler,
  postPublicApiVersioningTest202609WidgetsRouteHandler,
  putPublicApiVersioningTest202609WidgetsWidgetIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getPublicApiVersioningTest202609WidgetsRoute,
    getPublicApiVersioningTest202609WidgetsRouteHandler,
  )
  .openapi(
    postPublicApiVersioningTest202609WidgetsRoute,
    postPublicApiVersioningTest202609WidgetsRouteHandler,
  )
  .openapi(
    getPublicApiVersioningTest202609WidgetsWidgetIdRoute,
    getPublicApiVersioningTest202609WidgetsWidgetIdRouteHandler,
  )
  .openapi(
    putPublicApiVersioningTest202609WidgetsWidgetIdRoute,
    putPublicApiVersioningTest202609WidgetsWidgetIdRouteHandler,
  )
  .openapi(
    deletePublicApiVersioningTest202609WidgetsWidgetIdRoute,
    deletePublicApiVersioningTest202609WidgetsWidgetIdRouteHandler,
  )

export default app
