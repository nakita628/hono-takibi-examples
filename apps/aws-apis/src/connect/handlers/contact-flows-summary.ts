import type { RouteHandler } from '@hono/zod-openapi'
import type { getContactFlowsSummaryInstanceIdRoute } from '../routes'

export const getContactFlowsSummaryInstanceIdRouteHandler: RouteHandler<
  typeof getContactFlowsSummaryInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
