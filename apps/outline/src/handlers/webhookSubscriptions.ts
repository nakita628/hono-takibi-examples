import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postWebhookSubscriptionsCreateRoute,
  postWebhookSubscriptionsDeleteRoute,
  postWebhookSubscriptionsListRoute,
  postWebhookSubscriptionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookSubscriptionsHandler = app
  .openapi(postWebhookSubscriptionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookSubscriptionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookSubscriptionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhookSubscriptionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
