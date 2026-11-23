import type { RouteHandler } from '@hono/zod-openapi'
import type { postHostFactoriesHostsRoute } from '../routes'

export const postHostFactoriesHostsRouteHandler: RouteHandler<
  typeof postHostFactoriesHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
