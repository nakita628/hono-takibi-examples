import type { RouteHandler } from '@hono/zod-openapi'
import type { getOperatingSystemsRoute } from '../routes'

export const getOperatingSystemsRouteHandler: RouteHandler<
  typeof getOperatingSystemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
