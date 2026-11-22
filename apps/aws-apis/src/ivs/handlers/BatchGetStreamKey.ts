import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchGetStreamKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const BatchGetStreamKeyHandler = app.openapi(postBatchGetStreamKeyRoute, (c) => {
  throw new Error('Not implemented')
})
