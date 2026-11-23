import type { RouteHandler } from '@hono/zod-openapi'
import type { getX509AuthProviderRoute } from '../routes'

export const getX509AuthProviderRouteHandler: RouteHandler<
  typeof getX509AuthProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
