import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagRoleRoute, postActionUntagRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUntagRoleHandler = app
  .openapi(getActionUntagRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
