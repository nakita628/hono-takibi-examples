import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemaExtensionsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaExtensionsHandler = app.openapi(getSchemaExtensionsCountRoute, (c) => {
  throw new Error('Not implemented')
})
