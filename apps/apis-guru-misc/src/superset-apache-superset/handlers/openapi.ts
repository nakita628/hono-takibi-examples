import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiVersionOpenapiRoute } from '../routes'

const app = new OpenAPIHono()

export const openapiHandler = app.openapi(getOpenapiVersionOpenapiRoute, (c) => {
  throw new Error('Not implemented')
})
