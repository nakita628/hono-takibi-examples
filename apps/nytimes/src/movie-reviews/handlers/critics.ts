import type { RouteHandler } from '@hono/zod-openapi'
import type { getCriticsResourceTypeJsonRoute } from '../routes'

export const getCriticsResourceTypeJsonRouteHandler: RouteHandler<
  typeof getCriticsResourceTypeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
