import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CancellationsIdRoute,
  deleteV1RunsRunIDRoute,
  deleteV1WebhooksIdRoute,
  getV1CancellationsRoute,
  getV1EventsInternalIDRoute,
  getV1EventsInternalIDRunsRoute,
  getV1EventsRoute,
  getV1RunsRunIDJobsRoute,
  getV1RunsRunIDRoute,
  getV1WebhooksIdRoute,
  getV1WebhooksRoute,
  postV1CancellationsRoute,
  postV1SignalsRoute,
  postV1WebhooksRoute,
  putV1WebhooksIdRoute,
} from './routes'
import {
  deleteV1CancellationsIdRouteHandler,
  deleteV1RunsRunIDRouteHandler,
  deleteV1WebhooksIdRouteHandler,
  getV1CancellationsRouteHandler,
  getV1EventsInternalIDRouteHandler,
  getV1EventsInternalIDRunsRouteHandler,
  getV1EventsRouteHandler,
  getV1RunsRunIDJobsRouteHandler,
  getV1RunsRunIDRouteHandler,
  getV1WebhooksIdRouteHandler,
  getV1WebhooksRouteHandler,
  postV1CancellationsRouteHandler,
  postV1SignalsRouteHandler,
  postV1WebhooksRouteHandler,
  putV1WebhooksIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1EventsRoute, getV1EventsRouteHandler)
  .openapi(getV1EventsInternalIDRoute, getV1EventsInternalIDRouteHandler)
  .openapi(getV1EventsInternalIDRunsRoute, getV1EventsInternalIDRunsRouteHandler)
  .openapi(getV1RunsRunIDRoute, getV1RunsRunIDRouteHandler)
  .openapi(deleteV1RunsRunIDRoute, deleteV1RunsRunIDRouteHandler)
  .openapi(getV1RunsRunIDJobsRoute, getV1RunsRunIDJobsRouteHandler)
  .openapi(postV1SignalsRoute, postV1SignalsRouteHandler)
  .openapi(getV1CancellationsRoute, getV1CancellationsRouteHandler)
  .openapi(postV1CancellationsRoute, postV1CancellationsRouteHandler)
  .openapi(deleteV1CancellationsIdRoute, deleteV1CancellationsIdRouteHandler)
  .openapi(getV1WebhooksRoute, getV1WebhooksRouteHandler)
  .openapi(postV1WebhooksRoute, postV1WebhooksRouteHandler)
  .openapi(getV1WebhooksIdRoute, getV1WebhooksIdRouteHandler)
  .openapi(putV1WebhooksIdRoute, putV1WebhooksIdRouteHandler)
  .openapi(deleteV1WebhooksIdRoute, deleteV1WebhooksIdRouteHandler)

export default app
