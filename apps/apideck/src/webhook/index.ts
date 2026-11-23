import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhookWebhooksIdRoute,
  getWebhookLogsRoute,
  getWebhookWebhooksIdRoute,
  getWebhookWebhooksRoute,
  patchWebhookWebhooksIdRoute,
  postWebhookWebhooksIdExecuteServiceIdRoute,
  postWebhookWebhooksIdXServiceIdRoute,
  postWebhookWebhooksRoute,
  postWebhookWIdServiceIdRoute,
} from './routes'
import {
  deleteWebhookWebhooksIdRouteHandler,
  getWebhookLogsRouteHandler,
  getWebhookWebhooksIdRouteHandler,
  getWebhookWebhooksRouteHandler,
  patchWebhookWebhooksIdRouteHandler,
  postWebhookWebhooksIdExecuteServiceIdRouteHandler,
  postWebhookWebhooksIdXServiceIdRouteHandler,
  postWebhookWebhooksRouteHandler,
  postWebhookWIdServiceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWebhookLogsRoute, getWebhookLogsRouteHandler)
  .openapi(postWebhookWIdServiceIdRoute, postWebhookWIdServiceIdRouteHandler)
  .openapi(getWebhookWebhooksRoute, getWebhookWebhooksRouteHandler)
  .openapi(postWebhookWebhooksRoute, postWebhookWebhooksRouteHandler)
  .openapi(deleteWebhookWebhooksIdRoute, deleteWebhookWebhooksIdRouteHandler)
  .openapi(getWebhookWebhooksIdRoute, getWebhookWebhooksIdRouteHandler)
  .openapi(patchWebhookWebhooksIdRoute, patchWebhookWebhooksIdRouteHandler)
  .openapi(
    postWebhookWebhooksIdExecuteServiceIdRoute,
    postWebhookWebhooksIdExecuteServiceIdRouteHandler,
  )
  .openapi(postWebhookWebhooksIdXServiceIdRoute, postWebhookWebhooksIdXServiceIdRouteHandler)

export default app
