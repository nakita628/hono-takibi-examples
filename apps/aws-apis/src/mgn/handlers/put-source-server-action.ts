import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutSourceServerActionRoute } from '../routes'

export const postPutSourceServerActionRouteHandler: RouteHandler<
  typeof postPutSourceServerActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
