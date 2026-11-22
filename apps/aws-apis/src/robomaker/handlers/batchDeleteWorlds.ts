import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchDeleteWorldsRoute } from '../routes'

const app = new OpenAPIHono()

export const batchDeleteWorldsHandler = app.openapi(postBatchDeleteWorldsRoute, (c) => {
  throw new Error('Not implemented')
})
