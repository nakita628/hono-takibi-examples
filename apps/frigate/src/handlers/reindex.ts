import { OpenAPIHono } from '@hono/zod-openapi'
import { putReindexRoute } from '../routes'

const app = new OpenAPIHono()

export const reindexHandler = app.openapi(putReindexRoute, (c) => {
  throw new Error('Not implemented')
})
