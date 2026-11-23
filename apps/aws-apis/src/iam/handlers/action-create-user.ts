import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateUserRoute, postActionCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateUserHandler = app
  .openapi(getActionCreateUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateUserRoute, (c) => {
    throw new Error('Not implemented')
  })
