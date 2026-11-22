import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OpenapiRoute } from '../routes'

const app = new OpenAPIHono()

export const openapiHandler = app.openapi(getV1OpenapiRoute, (c) => {
  throw new Error('Not implemented')
})
