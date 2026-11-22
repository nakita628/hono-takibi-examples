import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateRoleRoute, postActionUpdateRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateRoleHandler = app
  .openapi(getActionUpdateRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
