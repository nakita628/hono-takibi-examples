import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddUserToGroupRoute, postActionAddUserToGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAddUserToGroupHandler = app
  .openapi(getActionAddUserToGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddUserToGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
