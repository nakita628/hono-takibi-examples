import { OpenAPIHono } from '@hono/zod-openapi'
import { getPhoneValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneValidateHandler = app.openapi(getPhoneValidateRoute, (c) => {
  throw new Error('Not implemented')
})
