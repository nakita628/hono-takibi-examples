import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4GlqlSchemaRoute, postApiV4GlqlRoute } from '../routes'

const app = new OpenAPIHono()

export const glqlHandler = app
  .openapi(postApiV4GlqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GlqlSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
