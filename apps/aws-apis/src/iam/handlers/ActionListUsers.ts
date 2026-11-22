import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListUsersRoute, postActionListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListUsersHandler = app
  .openapi(getActionListUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
