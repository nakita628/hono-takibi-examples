import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionBuildSuggestersRoute, postActionBuildSuggestersRoute } from '../routes'

export const getActionBuildSuggestersRouteHandler: RouteHandler<
  typeof getActionBuildSuggestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBuildSuggestersRouteHandler: RouteHandler<
  typeof postActionBuildSuggestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
