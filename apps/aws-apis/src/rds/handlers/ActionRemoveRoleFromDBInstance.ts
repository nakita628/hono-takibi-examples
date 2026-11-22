import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveRoleFromDBInstanceRoute,
  postActionRemoveRoleFromDBInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRemoveRoleFromDBInstanceHandler = app
  .openapi(getActionRemoveRoleFromDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveRoleFromDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
