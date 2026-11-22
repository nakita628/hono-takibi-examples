import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyUserGroupRoute, postActionModifyUserGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyUserGroupHandler = app
  .openapi(getActionModifyUserGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyUserGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
