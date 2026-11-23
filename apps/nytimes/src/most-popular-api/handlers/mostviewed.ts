import type { RouteHandler } from '@hono/zod-openapi'
import type { getMostviewedSectionTimePeriodJsonRoute } from '../routes'

export const getMostviewedSectionTimePeriodJsonRouteHandler: RouteHandler<
  typeof getMostviewedSectionTimePeriodJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
