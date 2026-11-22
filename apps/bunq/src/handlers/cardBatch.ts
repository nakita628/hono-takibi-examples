import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDCardBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const cardBatchHandler = app.openapi(postUserUserIDCardBatchRoute, (c) => {
  throw new Error('Not implemented')
})
