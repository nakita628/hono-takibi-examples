import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTagSAMLProviderRoute, postActionTagSAMLProviderRoute } from '../routes'

export const getActionTagSAMLProviderRouteHandler: RouteHandler<
  typeof getActionTagSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTagSAMLProviderRouteHandler: RouteHandler<
  typeof postActionTagSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
