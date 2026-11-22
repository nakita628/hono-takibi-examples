import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyUserRoute, postActionModifyUserRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyUserHandler = app
  .openapi(getActionModifyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
