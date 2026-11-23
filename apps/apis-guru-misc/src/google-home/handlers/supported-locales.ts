import type { RouteHandler } from '@hono/zod-openapi'
import type { getSupportedLocalesRoute } from '../routes'

export const getSupportedLocalesRouteHandler: RouteHandler<
  typeof getSupportedLocalesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
