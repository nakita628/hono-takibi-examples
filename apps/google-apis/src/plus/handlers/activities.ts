import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActivitiesActivityIdCommentsRoute,
  getActivitiesActivityIdPeopleCollectionRoute,
  getActivitiesActivityIdRoute,
  getActivitiesRoute,
} from '../routes'

export const getActivitiesRouteHandler: RouteHandler<typeof getActivitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getActivitiesActivityIdRouteHandler: RouteHandler<
  typeof getActivitiesActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getActivitiesActivityIdCommentsRouteHandler: RouteHandler<
  typeof getActivitiesActivityIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getActivitiesActivityIdPeopleCollectionRouteHandler: RouteHandler<
  typeof getActivitiesActivityIdPeopleCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
