import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartEdgeConfigurationUpdateRoute } from '../routes'

export const postStartEdgeConfigurationUpdateRouteHandler: RouteHandler<
  typeof postStartEdgeConfigurationUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
