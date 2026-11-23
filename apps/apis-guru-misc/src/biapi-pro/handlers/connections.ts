import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConnectionsIdConnectionSourcesIdSourceRoute,
  getConnectionsIdConnectionLogsRoute,
  getConnectionsIdConnectionSourcesRoute,
  getConnectionsRoute,
  postConnectionsIdConnectionSourcesIdSourceRoute,
  putConnectionsIdConnectionSourcesIdSourceRoute,
} from '../routes'

export const getConnectionsRouteHandler: RouteHandler<typeof getConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectionsIdConnectionLogsRouteHandler: RouteHandler<
  typeof getConnectionsIdConnectionLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectionsIdConnectionSourcesRouteHandler: RouteHandler<
  typeof getConnectionsIdConnectionSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConnectionsIdConnectionSourcesIdSourceRouteHandler: RouteHandler<
  typeof deleteConnectionsIdConnectionSourcesIdSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionsIdConnectionSourcesIdSourceRouteHandler: RouteHandler<
  typeof postConnectionsIdConnectionSourcesIdSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdConnectionSourcesIdSourceRouteHandler: RouteHandler<
  typeof putConnectionsIdConnectionSourcesIdSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
