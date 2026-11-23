import { OpenAPIHono } from '@hono/zod-openapi'
import { getHiddenBasicAuthUserPasswdRoute } from '../routes'

const app = new OpenAPIHono()

export const hiddenBasicAuthHandler = app.openapi(getHiddenBasicAuthUserPasswdRoute, (c) => {
  throw new Error('Not implemented')
})
