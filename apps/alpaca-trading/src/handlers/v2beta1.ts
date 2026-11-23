import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2beta1EventsActivitiesRoute } from '../routes'

export const getV2beta1EventsActivitiesRouteHandler: RouteHandler<
  typeof getV2beta1EventsActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
