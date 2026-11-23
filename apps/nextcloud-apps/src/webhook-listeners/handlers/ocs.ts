import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidRoute,
  deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
  getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
  getOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute,
  postOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute,
  postOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(getOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidRoute, (c) => {
    throw new Error('Not implemented')
  })
