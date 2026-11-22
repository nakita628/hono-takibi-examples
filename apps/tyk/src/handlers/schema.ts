import { OpenAPIHono } from '@hono/zod-openapi'
import { getTykSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaHandler = app.openapi(getTykSchemaRoute, (c) => {
  throw new Error('Not implemented')
})
