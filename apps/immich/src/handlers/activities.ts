import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActivitiesRoute,
  postActivitiesRoute,
  getActivitiesStatisticsRoute,
  deleteActivitiesIdRoute,
} from '../routes'

export const getActivitiesRouteHandler: RouteHandler<typeof getActivitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postActivitiesRouteHandler: RouteHandler<typeof postActivitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getActivitiesStatisticsRouteHandler: RouteHandler<
  typeof getActivitiesStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteActivitiesIdRouteHandler: RouteHandler<typeof deleteActivitiesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
