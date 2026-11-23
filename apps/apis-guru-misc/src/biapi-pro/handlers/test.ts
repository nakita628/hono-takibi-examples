import { OpenAPIHono } from '@hono/zod-openapi'
import { postTestSyncRoute, postTestWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const testHandler = app
  .openapi(postTestSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
