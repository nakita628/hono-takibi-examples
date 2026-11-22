import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteUserGroupRoute, postActionDeleteUserGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteUserGroupHandler = app
  .openapi(getActionDeleteUserGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteUserGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
