import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreDBClusterToPointInTimeRoute,
  postActionRestoreDBClusterToPointInTimeRoute,
} from '../routes'

export const getActionRestoreDBClusterToPointInTimeRouteHandler: RouteHandler<
  typeof getActionRestoreDBClusterToPointInTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreDBClusterToPointInTimeRouteHandler: RouteHandler<
  typeof postActionRestoreDBClusterToPointInTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
