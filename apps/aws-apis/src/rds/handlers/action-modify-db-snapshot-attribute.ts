import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDBSnapshotAttributeRoute,
  postActionModifyDBSnapshotAttributeRoute,
} from '../routes'

export const getActionModifyDBSnapshotAttributeRouteHandler: RouteHandler<
  typeof getActionModifyDBSnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBSnapshotAttributeRouteHandler: RouteHandler<
  typeof postActionModifyDBSnapshotAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
