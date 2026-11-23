import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchGetStreamKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const batchGetStreamKeyHandler = app.openapi(postBatchGetStreamKeyRoute, (c) => {
  throw new Error('Not implemented')
})
