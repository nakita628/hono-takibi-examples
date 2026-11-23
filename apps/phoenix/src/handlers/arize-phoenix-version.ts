import type { RouteHandler } from '@hono/zod-openapi'
import type { getArizePhoenixVersionRoute } from '../routes'

export const getArizePhoenixVersionRouteHandler: RouteHandler<
  typeof getArizePhoenixVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
