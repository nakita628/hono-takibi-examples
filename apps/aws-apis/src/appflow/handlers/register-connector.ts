import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegisterConnectorRoute } from '../routes'

export const postRegisterConnectorRouteHandler: RouteHandler<
  typeof postRegisterConnectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
