import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksIncomingWebhookIdRoute,
  getWebhooksIncomingUserUserIdRoute,
  postWebhooksIncomingCreateConversationIdRoute,
  postWebhooksIncomingWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incomingWebhooksHandler = app
  .openapi(postWebhooksIncomingCreateConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksIncomingUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksIncomingWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksIncomingWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
