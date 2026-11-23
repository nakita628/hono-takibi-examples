import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnregisterConnectorRoute } from '../routes'

export const postUnregisterConnectorRouteHandler: RouteHandler<
  typeof postUnregisterConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
