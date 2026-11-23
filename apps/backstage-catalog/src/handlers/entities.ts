import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEntitiesByUidUidRoute,
  getEntitiesByNameKindNamespaceNameAncestryRoute,
  getEntitiesByNameKindNamespaceNameRoute,
  getEntitiesByQueryRoute,
  getEntitiesByUidUidRoute,
  getEntitiesRoute,
  postEntitiesByQueryRoute,
  postEntitiesByRefsRoute,
} from '../routes'

export const getEntitiesRouteHandler: RouteHandler<typeof getEntitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntitiesByUidUidRouteHandler: RouteHandler<
  typeof getEntitiesByUidUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEntitiesByUidUidRouteHandler: RouteHandler<
  typeof deleteEntitiesByUidUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntitiesByNameKindNamespaceNameRouteHandler: RouteHandler<
  typeof getEntitiesByNameKindNamespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntitiesByNameKindNamespaceNameAncestryRouteHandler: RouteHandler<
  typeof getEntitiesByNameKindNamespaceNameAncestryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEntitiesByRefsRouteHandler: RouteHandler<typeof postEntitiesByRefsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEntitiesByQueryRouteHandler: RouteHandler<typeof getEntitiesByQueryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEntitiesByQueryRouteHandler: RouteHandler<
  typeof postEntitiesByQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
