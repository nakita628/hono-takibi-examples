import type { RouteHandler } from '@hono/zod-openapi'
import type { getExchangeScheduleRoute } from '../routes'

export const getExchangeScheduleRouteHandler: RouteHandler<
  typeof getExchangeScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
