import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthenticationProvidersIdRoute,
  getAuthenticationProvidersIdRoute,
  getAuthenticationProvidersRoute,
  patchAuthenticationProvidersIdRoute,
  postAuthenticationProvidersRoute,
} from '../routes'

export const getAuthenticationProvidersRouteHandler: RouteHandler<
  typeof getAuthenticationProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationProvidersRouteHandler: RouteHandler<
  typeof postAuthenticationProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthenticationProvidersIdRouteHandler: RouteHandler<
  typeof deleteAuthenticationProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthenticationProvidersIdRouteHandler: RouteHandler<
  typeof getAuthenticationProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAuthenticationProvidersIdRouteHandler: RouteHandler<
  typeof patchAuthenticationProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
