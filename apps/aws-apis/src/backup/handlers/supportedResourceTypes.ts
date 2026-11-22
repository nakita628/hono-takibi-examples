import { OpenAPIHono } from '@hono/zod-openapi'
import { getSupportedResourceTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const supportedResourceTypesHandler = app.openapi(getSupportedResourceTypesRoute, (c) => {
  throw new Error('Not implemented')
})
