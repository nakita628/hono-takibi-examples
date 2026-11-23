import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeMappedResourceConfigurationRoute } from '../routes'

export const postDescribeMappedResourceConfigurationRouteHandler: RouteHandler<
  typeof postDescribeMappedResourceConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
