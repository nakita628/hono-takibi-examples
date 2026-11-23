import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteConnectorProfileRoute } from '../routes'

export const postDeleteConnectorProfileRouteHandler: RouteHandler<
  typeof postDeleteConnectorProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
