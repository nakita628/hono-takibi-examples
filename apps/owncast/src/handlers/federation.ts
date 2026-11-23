import type { RouteHandler } from '@hono/zod-openapi'
import type { getFederationServersRoute } from '../routes'

export const getFederationServersRouteHandler: RouteHandler<
  typeof getFederationServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
