import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigurationRoute,
  postIntentAddMediaRoute,
  postIntentPlayMediaRoute,
  postIntentUpdateMediaAffinityRoute,
  postQueuesPlayMediaRoute,
  postQueuesUpdateActivityRoute,
} from './routes'
import {
  getConfigurationRouteHandler,
  postIntentAddMediaRouteHandler,
  postIntentPlayMediaRouteHandler,
  postIntentUpdateMediaAffinityRouteHandler,
  postQueuesPlayMediaRouteHandler,
  postQueuesUpdateActivityRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConfigurationRoute, getConfigurationRouteHandler)
  .openapi(postIntentAddMediaRoute, postIntentAddMediaRouteHandler)
  .openapi(postIntentPlayMediaRoute, postIntentPlayMediaRouteHandler)
  .openapi(postIntentUpdateMediaAffinityRoute, postIntentUpdateMediaAffinityRouteHandler)
  .openapi(postQueuesPlayMediaRoute, postQueuesPlayMediaRouteHandler)
  .openapi(postQueuesUpdateActivityRoute, postQueuesUpdateActivityRouteHandler)

export default app
