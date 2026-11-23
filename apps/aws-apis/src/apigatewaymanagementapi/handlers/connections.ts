import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConnectionsConnectionIdRoute,
  getConnectionsConnectionIdRoute,
  postConnectionsConnectionIdRoute,
} from '../routes'

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

export const postConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof postConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
