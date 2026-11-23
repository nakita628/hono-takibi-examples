import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePortalsPortalIdRoute,
  getPortalsPortalIdRoute,
  getPortalsRoute,
  postPortalsRoute,
  putPortalsPortalIdRoute,
} from '../routes'

export const postPortalsRouteHandler: RouteHandler<typeof postPortalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortalsRouteHandler: RouteHandler<typeof getPortalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePortalsPortalIdRouteHandler: RouteHandler<
  typeof deletePortalsPortalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortalsPortalIdRouteHandler: RouteHandler<typeof getPortalsPortalIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPortalsPortalIdRouteHandler: RouteHandler<typeof putPortalsPortalIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
