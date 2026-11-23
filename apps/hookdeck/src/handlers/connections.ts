import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConnectionsIdRoute,
  getConnectionsCountRoute,
  getConnectionsIdRoute,
  getConnectionsRoute,
  postConnectionsRoute,
  putConnectionsIdArchiveRoute,
  putConnectionsIdDisableRoute,
  putConnectionsIdEnableRoute,
  putConnectionsIdPauseRoute,
  putConnectionsIdRoute,
  putConnectionsIdUnarchiveRoute,
  putConnectionsIdUnpauseRoute,
  putConnectionsRoute,
} from '../routes'

export const getConnectionsRouteHandler: RouteHandler<typeof getConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionsRouteHandler: RouteHandler<typeof postConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsRouteHandler: RouteHandler<typeof putConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectionsCountRouteHandler: RouteHandler<
  typeof getConnectionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectionsIdRouteHandler: RouteHandler<typeof getConnectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdRouteHandler: RouteHandler<typeof putConnectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteConnectionsIdRouteHandler: RouteHandler<
  typeof deleteConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdDisableRouteHandler: RouteHandler<
  typeof putConnectionsIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdArchiveRouteHandler: RouteHandler<
  typeof putConnectionsIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdEnableRouteHandler: RouteHandler<
  typeof putConnectionsIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdUnarchiveRouteHandler: RouteHandler<
  typeof putConnectionsIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdPauseRouteHandler: RouteHandler<
  typeof putConnectionsIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConnectionsIdUnpauseRouteHandler: RouteHandler<
  typeof putConnectionsIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
