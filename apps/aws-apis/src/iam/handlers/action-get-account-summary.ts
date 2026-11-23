import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetAccountSummaryRoute, postActionGetAccountSummaryRoute } from '../routes'

export const getActionGetAccountSummaryRouteHandler: RouteHandler<
  typeof getActionGetAccountSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAccountSummaryRouteHandler: RouteHandler<
  typeof postActionGetAccountSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
