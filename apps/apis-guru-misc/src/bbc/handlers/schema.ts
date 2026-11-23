import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaHandler = app.openapi(getSchemaRoute, (c) => {
  throw new Error('Not implemented')
})
