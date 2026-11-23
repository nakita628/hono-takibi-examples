import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogoutSamlRoute } from '../routes'

const app = new OpenAPIHono()

export const logoutHandler = app.openapi(getLogoutSamlRoute, (c) => {
  throw new Error('Not implemented')
})
