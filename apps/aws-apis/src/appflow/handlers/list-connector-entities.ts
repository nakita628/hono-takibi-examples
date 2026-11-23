import type { RouteHandler } from '@hono/zod-openapi'
import type { postListConnectorEntitiesRoute } from '../routes'

export const postListConnectorEntitiesRouteHandler: RouteHandler<
  typeof postListConnectorEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
