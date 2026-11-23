import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTimeLocationsIdIndexRoute,
  getTimeLocationsIndexRoute,
  postTimeLocationsIndexRoute,
} from '../routes'

export const getTimeLocationsIndexRouteHandler: RouteHandler<
  typeof getTimeLocationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimeLocationsIndexRouteHandler: RouteHandler<
  typeof postTimeLocationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimeLocationsIdIndexRouteHandler: RouteHandler<
  typeof getTimeLocationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
