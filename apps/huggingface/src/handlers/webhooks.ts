import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSettingsWebhooksWebhookIdRoute,
  getApiSettingsWebhooksRoute,
  getApiSettingsWebhooksWebhookIdRoute,
  postApiSettingsWebhooksRoute,
  postApiSettingsWebhooksWebhookIdActionRoute,
  postApiSettingsWebhooksWebhookIdReplayLogIdRoute,
  postApiSettingsWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getApiSettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksWebhookIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsWebhooksWebhookIdReplayLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
