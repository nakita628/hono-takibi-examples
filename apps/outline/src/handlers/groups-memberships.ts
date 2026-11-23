import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsMembershipsRoute } from '../routes'

export const postGroupsMembershipsRouteHandler: RouteHandler<
  typeof postGroupsMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
