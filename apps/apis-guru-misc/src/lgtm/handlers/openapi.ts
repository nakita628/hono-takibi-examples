import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiRoute } from '../routes'

const app = new OpenAPIHono()

export const openapiHandler = app.openapi(getOpenapiRoute, (c) => {
  throw new Error('Not implemented')
})
