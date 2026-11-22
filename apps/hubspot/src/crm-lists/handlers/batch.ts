import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmLists202609RecordsMembershipsBatchReadRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postCrmLists202609RecordsMembershipsBatchReadRoute, (c) => {
  throw new Error('Not implemented')
})
