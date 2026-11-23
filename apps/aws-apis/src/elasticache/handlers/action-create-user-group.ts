import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateUserGroupRoute, postActionCreateUserGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateUserGroupHandler = app
  .openapi(getActionCreateUserGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateUserGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
