import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateSAMLProviderRoute, postActionCreateSAMLProviderRoute } from '../routes'

export const getActionCreateSAMLProviderRouteHandler: RouteHandler<
  typeof getActionCreateSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSAMLProviderRouteHandler: RouteHandler<
  typeof postActionCreateSAMLProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
