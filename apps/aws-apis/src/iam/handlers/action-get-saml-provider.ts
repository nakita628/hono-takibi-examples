import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetSAMLProviderRoute, postActionGetSAMLProviderRoute } from '../routes'

export const getActionGetSAMLProviderRouteHandler: RouteHandler<
  typeof getActionGetSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSAMLProviderRouteHandler: RouteHandler<
  typeof postActionGetSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
