import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamBillableInfoRoute } from '../routes'

export const getTeamBillableInfoRouteHandler: RouteHandler<
  typeof getTeamBillableInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
