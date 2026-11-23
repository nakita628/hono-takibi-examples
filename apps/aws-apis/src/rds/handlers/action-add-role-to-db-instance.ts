import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddRoleToDBInstanceRoute, postActionAddRoleToDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAddRoleToDbInstanceHandler = app
  .openapi(getActionAddRoleToDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddRoleToDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
