import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveRoleFromDBInstanceRoute,
  postActionRemoveRoleFromDBInstanceRoute,
} from '../routes'

export const getActionRemoveRoleFromDBInstanceRouteHandler: RouteHandler<
  typeof getActionRemoveRoleFromDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveRoleFromDBInstanceRouteHandler: RouteHandler<
  typeof postActionRemoveRoleFromDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
