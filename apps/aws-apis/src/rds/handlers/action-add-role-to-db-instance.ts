import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAddRoleToDBInstanceRoute,
  postActionAddRoleToDBInstanceRoute,
} from '../routes'

export const getActionAddRoleToDBInstanceRouteHandler: RouteHandler<
  typeof getActionAddRoleToDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddRoleToDBInstanceRouteHandler: RouteHandler<
  typeof postActionAddRoleToDBInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
