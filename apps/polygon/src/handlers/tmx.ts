import type { RouteHandler } from '@hono/zod-openapi'
import type { getTmxV1CorporateEventsRoute } from '../routes'

export const getTmxV1CorporateEventsRouteHandler: RouteHandler<
  typeof getTmxV1CorporateEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
