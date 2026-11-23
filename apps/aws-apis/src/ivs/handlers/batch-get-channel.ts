import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchGetChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const batchGetChannelHandler = app.openapi(postBatchGetChannelRoute, (c) => {
  throw new Error('Not implemented')
})
