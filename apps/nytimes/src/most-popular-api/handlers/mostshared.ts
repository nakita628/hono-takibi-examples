import type { RouteHandler } from '@hono/zod-openapi'
import type { getMostsharedSectionTimePeriodJsonRoute } from '../routes'

export const getMostsharedSectionTimePeriodJsonRouteHandler: RouteHandler<
  typeof getMostsharedSectionTimePeriodJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
