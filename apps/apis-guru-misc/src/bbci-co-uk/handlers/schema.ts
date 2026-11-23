import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemaIblJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaHandler = app.openapi(getSchemaIblJsonRoute, (c) => {
  throw new Error('Not implemented')
})
