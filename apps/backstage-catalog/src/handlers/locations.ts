import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLocationsIdRoute,
  getLocationsByEntityKindNamespaceNameRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  postLocationsByQueryRoute,
  postLocationsRoute,
  putLocationsIdRoute,
} from '../routes'

export const postLocationsRouteHandler: RouteHandler<typeof postLocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocationsRouteHandler: RouteHandler<typeof getLocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLocationsByQueryRouteHandler: RouteHandler<
  typeof postLocationsByQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocationsIdRouteHandler: RouteHandler<typeof getLocationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLocationsIdRouteHandler: RouteHandler<typeof putLocationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLocationsIdRouteHandler: RouteHandler<typeof deleteLocationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLocationsByEntityKindNamespaceNameRouteHandler: RouteHandler<
  typeof getLocationsByEntityKindNamespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
