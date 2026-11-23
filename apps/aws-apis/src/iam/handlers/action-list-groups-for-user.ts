import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListGroupsForUserRoute, postActionListGroupsForUserRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListGroupsForUserHandler = app
  .openapi(getActionListGroupsForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListGroupsForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
