import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWatchprovidersMoviesRoute,
  getWatchprovidersRegionsRoute,
  getWatchprovidersTvRoute,
} from '../routes'

export const getWatchprovidersRegionsRouteHandler: RouteHandler<
  typeof getWatchprovidersRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWatchprovidersMoviesRouteHandler: RouteHandler<
  typeof getWatchprovidersMoviesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWatchprovidersTvRouteHandler: RouteHandler<
  typeof getWatchprovidersTvRoute
> = async (c) => {
  throw new Error('Not implemented')
}
