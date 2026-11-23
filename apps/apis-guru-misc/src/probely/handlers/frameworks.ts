import type { RouteHandler } from '@hono/zod-openapi'
import type { getFrameworksIdIndexRoute, getFrameworksIndexRoute } from '../routes'

export const getFrameworksIndexRouteHandler: RouteHandler<typeof getFrameworksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFrameworksIdIndexRouteHandler: RouteHandler<
  typeof getFrameworksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
