import { OpenAPIHono } from '@hono/zod-openapi'
import { getExtensionSchemasIdRoute, getExtensionSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const extensionSchemasHandler = app
  .openapi(getExtensionSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionSchemasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
