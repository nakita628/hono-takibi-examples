import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListRolesRoute, postActionListRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListRolesHandler = app
  .openapi(getActionListRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
