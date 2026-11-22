import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSchemaIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaHandler = app.openapi(getApiSchemaIndexRoute, (c) => {
  throw new Error('Not implemented')
})
