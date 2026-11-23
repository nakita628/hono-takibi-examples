import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetAuthenticationResultRoute } from '../routes'

const app = new OpenAPIHono()

export const getAuthenticationResultHandler = app.openapi(postGetAuthenticationResultRoute, (c) => {
  throw new Error('Not implemented')
})
