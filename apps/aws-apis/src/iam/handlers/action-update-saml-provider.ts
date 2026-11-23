import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateSAMLProviderRoute, postActionUpdateSAMLProviderRoute } from '../routes'

export const getActionUpdateSAMLProviderRouteHandler: RouteHandler<
  typeof getActionUpdateSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateSAMLProviderRouteHandler: RouteHandler<
  typeof postActionUpdateSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
