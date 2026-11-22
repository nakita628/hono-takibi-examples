import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchGetRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const BatchGetRecordHandler = app.openapi(postBatchGetRecordRoute, (c) => {
  throw new Error('Not implemented')
})
