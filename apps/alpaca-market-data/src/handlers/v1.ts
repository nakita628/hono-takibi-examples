import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1CorporateActionsRoute } from '../routes'

export const getV1CorporateActionsRouteHandler: RouteHandler<
  typeof getV1CorporateActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
