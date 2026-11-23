import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPeopleRoute,
  getPeopleUserIdActivitiesCollectionRoute,
  getPeopleUserIdPeopleCollectionRoute,
  getPeopleUserIdRoute,
} from '../routes'

export const getPeopleRouteHandler: RouteHandler<typeof getPeopleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleUserIdRouteHandler: RouteHandler<typeof getPeopleUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleUserIdActivitiesCollectionRouteHandler: RouteHandler<
  typeof getPeopleUserIdActivitiesCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleUserIdPeopleCollectionRouteHandler: RouteHandler<
  typeof getPeopleUserIdPeopleCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
