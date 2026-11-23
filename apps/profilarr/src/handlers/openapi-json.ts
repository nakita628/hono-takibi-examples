import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenapiJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const openapiJsonHandler = app.openapi(getOpenapiJsonRoute, (c) => {
  throw new Error('Not implemented')
})
