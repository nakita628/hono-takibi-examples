import { OpenAPIHono } from '@hono/zod-openapi'
import { getBadgeRoute, getValidateRoute, postValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const validationHandler = app
  .openapi(getBadgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
