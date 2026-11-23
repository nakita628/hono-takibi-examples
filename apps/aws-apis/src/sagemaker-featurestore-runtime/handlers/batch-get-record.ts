import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchGetRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const batchGetRecordHandler = app.openapi(postBatchGetRecordRoute, (c) => {
  throw new Error('Not implemented')
})
