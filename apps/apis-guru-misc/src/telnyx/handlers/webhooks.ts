import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebhookDeliveriesIdRoute, getWebhookDeliveriesRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhookDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhookDeliveriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
