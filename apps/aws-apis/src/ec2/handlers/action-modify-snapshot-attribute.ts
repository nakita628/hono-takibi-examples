import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifySnapshotAttributeRoute,
  postActionModifySnapshotAttributeRoute,
} from '../routes'

export const getActionModifySnapshotAttributeRouteHandler: RouteHandler<
  typeof getActionModifySnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifySnapshotAttributeRouteHandler: RouteHandler<
  typeof postActionModifySnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
