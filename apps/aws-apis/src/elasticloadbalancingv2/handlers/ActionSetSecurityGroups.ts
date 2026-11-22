import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetSecurityGroupsRoute, postActionSetSecurityGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSetSecurityGroupsHandler = app
  .openapi(getActionSetSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
