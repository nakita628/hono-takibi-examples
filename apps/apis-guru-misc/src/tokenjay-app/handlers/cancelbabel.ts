import type { RouteHandler } from '@hono/zod-openapi'
import type { getCancelbabelBoxIdRoute } from '../routes'

export const getCancelbabelBoxIdRouteHandler: RouteHandler<
  typeof getCancelbabelBoxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
