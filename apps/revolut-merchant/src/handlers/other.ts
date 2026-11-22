import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSynchronousWebhooksSynchronousWebhookIdRoute,
  getApiSynchronousWebhooksRoute,
  postApiSynchronousWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherHandler = app
  .openapi(postApiSynchronousWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSynchronousWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSynchronousWebhooksSynchronousWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
