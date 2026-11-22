import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute, getSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const schemaHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
