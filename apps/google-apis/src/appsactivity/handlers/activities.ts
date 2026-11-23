import type { RouteHandler } from '@hono/zod-openapi'
import type { getActivitiesRoute } from '../routes'

export const getActivitiesRouteHandler: RouteHandler<typeof getActivitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}
