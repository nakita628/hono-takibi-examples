import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchBusSchedulesRoute,
  getSearchMetaCategoriesRoute,
  getSearchMetaSearchProvidersRoute,
  getSearchMetaSortsRoute,
  getSearchRoute,
} from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchBusSchedulesRouteHandler: RouteHandler<
  typeof getSearchBusSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchMetaCategoriesRouteHandler: RouteHandler<
  typeof getSearchMetaCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchMetaSearchProvidersRouteHandler: RouteHandler<
  typeof getSearchMetaSearchProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchMetaSortsRouteHandler: RouteHandler<typeof getSearchMetaSortsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
