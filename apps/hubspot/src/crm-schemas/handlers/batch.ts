import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjectSchemas202609SchemasBatchReadRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postCrmObjectSchemas202609SchemasBatchReadRoute, (c) => {
  throw new Error('Not implemented')
})
