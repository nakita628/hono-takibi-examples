import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSnapshotAttributeRoute,
  postActionDescribeSnapshotAttributeRoute,
} from '../routes'

export const getActionDescribeSnapshotAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeSnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSnapshotAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeSnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
