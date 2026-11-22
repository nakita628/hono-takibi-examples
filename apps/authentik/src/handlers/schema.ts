import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemaIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaHandler = app.openapi(getSchemaIndexRoute, (c) => {
  throw new Error('Not implemented')
})
