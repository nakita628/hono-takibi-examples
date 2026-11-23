import type { RouteHandler } from '@hono/zod-openapi'
import type { getSwaggerDocNameJsonRoute } from '../routes'

export const getSwaggerDocNameJsonRouteHandler: RouteHandler<
  typeof getSwaggerDocNameJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
