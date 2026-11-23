import type { RouteHandler } from '@hono/zod-openapi'
import type { getMostemailedSectionTimePeriodJsonRoute } from '../routes'

export const getMostemailedSectionTimePeriodJsonRouteHandler: RouteHandler<
  typeof getMostemailedSectionTimePeriodJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
