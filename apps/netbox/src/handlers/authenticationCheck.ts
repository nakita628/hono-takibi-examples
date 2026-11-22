import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAuthenticationCheckIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationCheckHandler = app.openapi(getApiAuthenticationCheckIndexRoute, (c) => {
  throw new Error('Not implemented')
})
