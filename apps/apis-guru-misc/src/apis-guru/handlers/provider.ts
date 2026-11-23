import type { RouteHandler } from '@hono/zod-openapi'
import type { getProviderServicesJsonRoute } from '../routes'

export const getProviderServicesJsonRouteHandler: RouteHandler<
  typeof getProviderServicesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
