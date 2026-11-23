import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionChangePasswordRoute, postActionChangePasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const actionChangePasswordHandler = app
  .openapi(getActionChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
