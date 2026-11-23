import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUacConnectionsIdRoute,
  getUacConnectionsIdRoute,
  getUacConnectionsRoute,
  patchUacConnectionsIdRoute,
  postUacConnectionsIdActionsCheckRegistrationStatusRoute,
  postUacConnectionsRoute,
} from '../routes'

export const getUacConnectionsRouteHandler: RouteHandler<typeof getUacConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUacConnectionsRouteHandler: RouteHandler<typeof postUacConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUacConnectionsIdRouteHandler: RouteHandler<
  typeof deleteUacConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUacConnectionsIdRouteHandler: RouteHandler<
  typeof getUacConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUacConnectionsIdRouteHandler: RouteHandler<
  typeof patchUacConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUacConnectionsIdActionsCheckRegistrationStatusRouteHandler: RouteHandler<
  typeof postUacConnectionsIdActionsCheckRegistrationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
