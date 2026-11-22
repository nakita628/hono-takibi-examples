import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserdataValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const userdataHandler = app.openapi(postUserdataValidateRoute, (c) => {
  throw new Error('Not implemented')
})
