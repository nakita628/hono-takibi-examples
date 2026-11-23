import type { RouteHandler } from '@hono/zod-openapi'
import type { getOperatingSystemVersionsRoute } from '../routes'

export const getOperatingSystemVersionsRouteHandler: RouteHandler<
  typeof getOperatingSystemVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
