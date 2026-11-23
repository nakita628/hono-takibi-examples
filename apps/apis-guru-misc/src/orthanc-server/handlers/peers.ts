import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePeersIdRoute,
  getPeersIdConfigurationRoute,
  getPeersIdRoute,
  getPeersIdSystemRoute,
  getPeersRoute,
  postPeersIdStoreRoute,
  postPeersIdStoreStraightRoute,
  putPeersIdRoute,
} from '../routes'

export const getPeersRouteHandler: RouteHandler<typeof getPeersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePeersIdRouteHandler: RouteHandler<typeof deletePeersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeersIdRouteHandler: RouteHandler<typeof getPeersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPeersIdRouteHandler: RouteHandler<typeof putPeersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeersIdConfigurationRouteHandler: RouteHandler<
  typeof getPeersIdConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPeersIdStoreRouteHandler: RouteHandler<typeof postPeersIdStoreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPeersIdStoreStraightRouteHandler: RouteHandler<
  typeof postPeersIdStoreStraightRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeersIdSystemRouteHandler: RouteHandler<typeof getPeersIdSystemRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
