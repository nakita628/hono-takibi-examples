import { OpenAPIHono } from '@hono/zod-openapi'
import { getNameAuthoritiesRoute } from '../routes'

const app = new OpenAPIHono()

export const nameAuthorityHandler = app.openapi(getNameAuthoritiesRoute, (c) => {
  throw new Error('Not implemented')
})
