import type { RouteHandler } from '@hono/zod-openapi'
import type { postNetworkStatusGetRoute } from '../routes'

export const postNetworkStatusGetRouteHandler: RouteHandler<
  typeof postNetworkStatusGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
