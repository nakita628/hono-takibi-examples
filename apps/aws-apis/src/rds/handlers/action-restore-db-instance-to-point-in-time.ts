import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreDBInstanceToPointInTimeRoute,
  postActionRestoreDBInstanceToPointInTimeRoute,
} from '../routes'

export const getActionRestoreDBInstanceToPointInTimeRouteHandler: RouteHandler<
  typeof getActionRestoreDBInstanceToPointInTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreDBInstanceToPointInTimeRouteHandler: RouteHandler<
  typeof postActionRestoreDBInstanceToPointInTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
