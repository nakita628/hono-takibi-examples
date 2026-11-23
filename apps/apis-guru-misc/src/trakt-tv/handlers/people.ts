import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPeopleIdListsTypeSortRoute,
  getPeopleIdMoviesRoute,
  getPeopleIdRoute,
  getPeopleIdShowsRoute,
  getPeopleUpdatesIdStartDateRoute,
  getPeopleUpdatesStartDateRoute,
} from '../routes'

export const getPeopleUpdatesIdStartDateRouteHandler: RouteHandler<
  typeof getPeopleUpdatesIdStartDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleUpdatesStartDateRouteHandler: RouteHandler<
  typeof getPeopleUpdatesStartDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleIdRouteHandler: RouteHandler<typeof getPeopleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleIdListsTypeSortRouteHandler: RouteHandler<
  typeof getPeopleIdListsTypeSortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleIdMoviesRouteHandler: RouteHandler<typeof getPeopleIdMoviesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPeopleIdShowsRouteHandler: RouteHandler<typeof getPeopleIdShowsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
