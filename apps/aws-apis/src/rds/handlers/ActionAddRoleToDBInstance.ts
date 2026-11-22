import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddRoleToDBInstanceRoute, postActionAddRoleToDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAddRoleToDBInstanceHandler = app
  .openapi(getActionAddRoleToDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddRoleToDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
