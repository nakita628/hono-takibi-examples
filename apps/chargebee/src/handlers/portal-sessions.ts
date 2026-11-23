import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPortalSessionsPortalSessionIdRoute,
  postPortalSessionsPortalSessionIdActivateRoute,
  postPortalSessionsPortalSessionIdLogoutRoute,
  postPortalSessionsRoute,
} from '../routes'

export const postPortalSessionsRouteHandler: RouteHandler<typeof postPortalSessionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPortalSessionsPortalSessionIdActivateRouteHandler: RouteHandler<
  typeof postPortalSessionsPortalSessionIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortalSessionsPortalSessionIdLogoutRouteHandler: RouteHandler<
  typeof postPortalSessionsPortalSessionIdLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortalSessionsPortalSessionIdRouteHandler: RouteHandler<
  typeof getPortalSessionsPortalSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
