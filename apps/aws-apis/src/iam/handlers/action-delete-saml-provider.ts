import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteSAMLProviderRoute, postActionDeleteSAMLProviderRoute } from '../routes'

export const getActionDeleteSAMLProviderRouteHandler: RouteHandler<
  typeof getActionDeleteSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSAMLProviderRouteHandler: RouteHandler<
  typeof postActionDeleteSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
