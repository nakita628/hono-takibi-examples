import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateConnectorProfileRoute } from '../routes'

export const postUpdateConnectorProfileRouteHandler: RouteHandler<
  typeof postUpdateConnectorProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
