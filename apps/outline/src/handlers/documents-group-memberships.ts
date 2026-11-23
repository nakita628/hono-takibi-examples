import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsGroupMembershipsRoute } from '../routes'

export const postDocumentsGroupMembershipsRouteHandler: RouteHandler<
  typeof postDocumentsGroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
