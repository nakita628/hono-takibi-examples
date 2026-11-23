import { OpenAPIHono } from '@hono/zod-openapi'
import { getValidateRoute, postValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const validateHandler = app
  .openapi(getValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
