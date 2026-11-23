import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIdentityProvidersIdentityProviderIdRoute,
  getIdentityProvidersAvailableProviderTypesRoute,
  getIdentityProvidersCountRoute,
  getIdentityProvidersIdentityProviderIdRoute,
  getIdentityProvidersRoute,
  patchIdentityProvidersIdentityProviderIdRoute,
  postIdentityProvidersRoute,
} from '../routes'

export const getIdentityProvidersRouteHandler: RouteHandler<
  typeof getIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityProvidersRouteHandler: RouteHandler<
  typeof postIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof getIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof patchIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof deleteIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityProvidersCountRouteHandler: RouteHandler<
  typeof getIdentityProvidersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentityProvidersAvailableProviderTypesRouteHandler: RouteHandler<
  typeof getIdentityProvidersAvailableProviderTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
