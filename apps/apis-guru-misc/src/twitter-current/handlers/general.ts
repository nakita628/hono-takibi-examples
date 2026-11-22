import { OpenAPIHono } from '@hono/zod-openapi'
import { get2OpenapiJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app.openapi(get2OpenapiJsonRoute, (c) => {
  throw new Error('Not implemented')
})
