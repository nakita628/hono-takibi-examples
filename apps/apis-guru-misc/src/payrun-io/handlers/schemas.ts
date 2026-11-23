import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemasDtoDataTypeRoute, getSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(getSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasDtoDataTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
