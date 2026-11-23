import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetSnapshotAttributeRoute,
  postActionResetSnapshotAttributeRoute,
} from '../routes'

export const getActionResetSnapshotAttributeRouteHandler: RouteHandler<
  typeof getActionResetSnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetSnapshotAttributeRouteHandler: RouteHandler<
  typeof postActionResetSnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
