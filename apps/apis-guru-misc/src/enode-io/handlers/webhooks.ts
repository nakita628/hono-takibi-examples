import { OpenAPIHono } from '@hono/zod-openapi'
import { postWebhooksFirehoseTestRoute, putWebhooksFirehoseRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(putWebhooksFirehoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksFirehoseTestRoute, (c) => {
    throw new Error('Not implemented')
  })
