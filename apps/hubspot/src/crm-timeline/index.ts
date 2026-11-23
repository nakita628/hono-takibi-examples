import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIntegratorsTimeline202609EventsBatchRoute,
  postIntegratorsTimeline202609EventsRoute,
  postIntegratorsTimeline202609TypesProjectsRoute,
} from './routes'
import {
  postIntegratorsTimeline202609EventsBatchRouteHandler,
  postIntegratorsTimeline202609EventsRouteHandler,
  postIntegratorsTimeline202609TypesProjectsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postIntegratorsTimeline202609EventsRoute,
    postIntegratorsTimeline202609EventsRouteHandler,
  )
  .openapi(
    postIntegratorsTimeline202609EventsBatchRoute,
    postIntegratorsTimeline202609EventsBatchRouteHandler,
  )
  .openapi(
    postIntegratorsTimeline202609TypesProjectsRoute,
    postIntegratorsTimeline202609TypesProjectsRouteHandler,
  )

export default app
