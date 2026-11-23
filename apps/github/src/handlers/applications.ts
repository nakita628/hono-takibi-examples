import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApplicationsClientIdGrantRoute,
  deleteApplicationsClientIdTokenRoute,
  patchApplicationsClientIdTokenRoute,
  postApplicationsClientIdTokenRoute,
  postApplicationsClientIdTokenScopedRoute,
} from '../routes'

export const deleteApplicationsClientIdGrantRouteHandler: RouteHandler<
  typeof deleteApplicationsClientIdGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsClientIdTokenRouteHandler: RouteHandler<
  typeof postApplicationsClientIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsClientIdTokenRouteHandler: RouteHandler<
  typeof patchApplicationsClientIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsClientIdTokenRouteHandler: RouteHandler<
  typeof deleteApplicationsClientIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApplicationsClientIdTokenScopedRouteHandler: RouteHandler<
  typeof postApplicationsClientIdTokenScopedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
