import type { RouteHandler } from '@hono/zod-openapi'
import type { getEnvironmentIndexRoute } from '../routes'

export const getEnvironmentIndexRouteHandler: RouteHandler<
  typeof getEnvironmentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
