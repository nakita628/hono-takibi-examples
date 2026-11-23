import type { RouteHandler } from '@hono/zod-openapi'
import type { postMediaResourceNameRoute } from '../routes'

export const postMediaResourceNameRouteHandler: RouteHandler<
  typeof postMediaResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
