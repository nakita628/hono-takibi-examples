import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const BatchExecuteHandler = app.openapi(postBatchExecuteRoute, (c) => {
  throw new Error('Not implemented')
})
