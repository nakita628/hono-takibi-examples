import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteUserRoute, postActionDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteUserHandler = app
  .openapi(getActionDeleteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
