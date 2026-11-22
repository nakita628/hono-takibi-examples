import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetRoleRoute, postActionGetRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetRoleHandler = app
  .openapi(getActionGetRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
