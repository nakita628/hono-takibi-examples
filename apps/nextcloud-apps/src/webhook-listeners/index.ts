import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidRoute,
  deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
  getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
  getOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute,
  postOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
  postOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute,
} from './routes'
import {
  deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidRouteHandler,
  deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRouteHandler,
  getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRouteHandler,
  getOcsV2PhpAppsWebhookListenersApiV1WebhooksRouteHandler,
  postOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRouteHandler,
  postOcsV2PhpAppsWebhookListenersApiV1WebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute,
    getOcsV2PhpAppsWebhookListenersApiV1WebhooksRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute,
    postOcsV2PhpAppsWebhookListenersApiV1WebhooksRouteHandler,
  )
  .openapi(
    getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
    getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
    postOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
    deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidRoute,
    deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidRouteHandler,
  )

export default app
