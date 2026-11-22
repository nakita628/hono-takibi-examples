import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2TweetsSearchWebhooksWebhookIdRoute,
  delete2WebhooksWebhookIdRoute,
  get2TweetsSearchWebhooksRoute,
  get2WebhooksRoute,
  post2TweetsSearchWebhooksWebhookIdRoute,
  post2WebhooksReplayRoute,
  post2WebhooksRoute,
  put2WebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(get2TweetsSearchWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2TweetsSearchWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2TweetsSearchWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2WebhooksReplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
