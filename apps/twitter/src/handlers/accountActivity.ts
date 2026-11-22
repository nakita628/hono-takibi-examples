import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRoute,
  get2AccountActivitySubscriptionsCountRoute,
  get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRoute,
  get2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute,
  post2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountActivityHandler = app
  .openapi(get2AccountActivitySubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRoute, (c) => {
    throw new Error('Not implemented')
  })
