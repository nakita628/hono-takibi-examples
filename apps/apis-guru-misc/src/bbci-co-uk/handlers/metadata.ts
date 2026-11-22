import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemaIblJsonRoute, getStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getSchemaIblJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
