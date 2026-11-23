import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSnapshotTierStatusRoute,
  postActionDescribeSnapshotTierStatusRoute,
} from '../routes'

export const getActionDescribeSnapshotTierStatusRouteHandler: RouteHandler<
  typeof getActionDescribeSnapshotTierStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSnapshotTierStatusRouteHandler: RouteHandler<
  typeof postActionDescribeSnapshotTierStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
