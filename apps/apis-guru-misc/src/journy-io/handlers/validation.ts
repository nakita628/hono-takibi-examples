import { OpenAPIHono } from '@hono/zod-openapi'
import { getValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const validationHandler = app.openapi(getValidateRoute, (c) => {
  throw new Error('Not implemented')
})
