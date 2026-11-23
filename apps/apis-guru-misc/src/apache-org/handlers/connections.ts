import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConnectionsConnectionIdRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsRoute,
  patchConnectionsConnectionIdRoute,
  postConnectionsRoute,
  postConnectionsTestRoute,
} from '../routes'

export const getConnectionsRouteHandler: RouteHandler<typeof getConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionsRouteHandler: RouteHandler<typeof postConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionsTestRouteHandler: RouteHandler<
  typeof postConnectionsTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof deleteConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof getConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof patchConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
