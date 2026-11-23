import { OpenAPIHono } from '@hono/zod-openapi'
import { getBasicAuthUserPasswdRoute } from '../routes'

const app = new OpenAPIHono()

export const basicAuthHandler = app.openapi(getBasicAuthUserPasswdRoute, (c) => {
  throw new Error('Not implemented')
})
