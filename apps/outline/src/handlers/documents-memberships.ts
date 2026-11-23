import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsMembershipsRoute } from '../routes'

export const postDocumentsMembershipsRouteHandler: RouteHandler<
  typeof postDocumentsMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
