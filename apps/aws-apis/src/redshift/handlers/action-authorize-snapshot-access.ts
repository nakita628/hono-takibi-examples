import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeSnapshotAccessRoute,
  postActionAuthorizeSnapshotAccessRoute,
} from '../routes'

export const getActionAuthorizeSnapshotAccessRouteHandler: RouteHandler<
  typeof getActionAuthorizeSnapshotAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeSnapshotAccessRouteHandler: RouteHandler<
  typeof postActionAuthorizeSnapshotAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
