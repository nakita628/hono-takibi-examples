import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinearreginterceptRoute } from '../routes'

export const getLinearreginterceptRouteHandler: RouteHandler<
  typeof getLinearreginterceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}
