import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postWebhooksAddRoute,
  postWebhooksDeleteRoute,
  postWebhooksInfoRoute,
  postWebhooksListRoute,
  postWebhooksUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postWebhooksListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
