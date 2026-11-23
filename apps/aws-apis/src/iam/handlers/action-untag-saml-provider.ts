import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUntagSAMLProviderRoute, postActionUntagSAMLProviderRoute } from '../routes'

export const getActionUntagSAMLProviderRouteHandler: RouteHandler<
  typeof getActionUntagSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUntagSAMLProviderRouteHandler: RouteHandler<
  typeof postActionUntagSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
