import type { RouteHandler } from '@hono/zod-openapi'
import type { getPhoneNumbersSummaryInstanceIdRoute } from '../routes'

export const getPhoneNumbersSummaryInstanceIdRouteHandler: RouteHandler<
  typeof getPhoneNumbersSummaryInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
