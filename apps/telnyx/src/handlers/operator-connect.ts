import type { RouteHandler } from '@hono/zod-openapi'
import type { postOperatorConnectActionsRefreshRoute } from '../routes'

export const postOperatorConnectActionsRefreshRouteHandler: RouteHandler<
  typeof postOperatorConnectActionsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
