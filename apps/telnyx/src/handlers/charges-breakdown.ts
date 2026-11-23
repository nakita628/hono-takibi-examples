import type { RouteHandler } from '@hono/zod-openapi'
import type { getChargesBreakdownRoute } from '../routes'

export const getChargesBreakdownRouteHandler: RouteHandler<
  typeof getChargesBreakdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}
