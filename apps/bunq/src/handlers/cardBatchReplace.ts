import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDCardBatchReplaceRoute } from '../routes'

const app = new OpenAPIHono()

export const cardBatchReplaceHandler = app.openapi(postUserUserIDCardBatchReplaceRoute, (c) => {
  throw new Error('Not implemented')
})
