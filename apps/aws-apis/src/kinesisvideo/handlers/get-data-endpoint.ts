import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetDataEndpointRoute } from '../routes'

export const postGetDataEndpointRouteHandler: RouteHandler<
  typeof postGetDataEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
