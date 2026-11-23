import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetLastBlockNumberRoute } from '../routes'

export const postGetLastBlockNumberRouteHandler: RouteHandler<
  typeof postGetLastBlockNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
