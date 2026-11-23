import type { RouteHandler } from '@hono/zod-openapi'
import type { getViberServiceMsgExternalIdRoute } from '../routes'

export const getViberServiceMsgExternalIdRouteHandler: RouteHandler<
  typeof getViberServiceMsgExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
