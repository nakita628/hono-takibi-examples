import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilterChainsFilterChainIdRoute,
  getFilterChainsFilterChainIdRoute,
  getFilterChainsRoute,
  patchFilterChainsFilterChainIdRoute,
  postFilterChainsRoute,
  putFilterChainsFilterChainIdRoute,
} from '../routes'

export const postFilterChainsRouteHandler: RouteHandler<typeof postFilterChainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFilterChainsRouteHandler: RouteHandler<typeof getFilterChainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilterChainsFilterChainIdRouteHandler: RouteHandler<
  typeof getFilterChainsFilterChainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFilterChainsFilterChainIdRouteHandler: RouteHandler<
  typeof patchFilterChainsFilterChainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFilterChainsFilterChainIdRouteHandler: RouteHandler<
  typeof putFilterChainsFilterChainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilterChainsFilterChainIdRouteHandler: RouteHandler<
  typeof deleteFilterChainsFilterChainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
