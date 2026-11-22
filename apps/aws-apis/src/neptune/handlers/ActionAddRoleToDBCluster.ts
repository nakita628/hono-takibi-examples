import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddRoleToDBClusterRoute, postActionAddRoleToDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAddRoleToDBClusterHandler = app
  .openapi(getActionAddRoleToDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddRoleToDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
