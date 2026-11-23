import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const emailValidateHandler = app.openapi(getEmailValidateRoute, (c) => {
  throw new Error('Not implemented')
})
