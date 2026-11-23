import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserSystemOverridesIndexRoute } from '../routes'

export const getUserSystemOverridesIndexRouteHandler: RouteHandler<
  typeof getUserSystemOverridesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
