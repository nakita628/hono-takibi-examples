import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1EventsRoute,
  postApiV3BatchesBatchIdItemsRoute,
  postApiV3BatchesRoute,
} from './routes'
import {
  postApiV1EventsRouteHandler,
  postApiV3BatchesBatchIdItemsRouteHandler,
  postApiV3BatchesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiV1EventsRoute, postApiV1EventsRouteHandler)
  .openapi(postApiV3BatchesRoute, postApiV3BatchesRouteHandler)
  .openapi(postApiV3BatchesBatchIdItemsRoute, postApiV3BatchesBatchIdItemsRouteHandler)

export default app
