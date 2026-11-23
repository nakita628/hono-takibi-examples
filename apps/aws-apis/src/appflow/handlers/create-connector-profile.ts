import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateConnectorProfileRoute } from '../routes'

export const postCreateConnectorProfileRouteHandler: RouteHandler<
  typeof postCreateConnectorProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
