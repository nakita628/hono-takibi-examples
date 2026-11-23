import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSnapshotsIdRoute,
  getSnapshotsIdBuildLogsRoute,
  getSnapshotsIdBuildLogsUrlRoute,
  getSnapshotsIdRoute,
  getSnapshotsRoute,
  postSnapshotsIdActivateRoute,
  postSnapshotsIdDeactivateRoute,
  postSnapshotsRoute,
} from '../routes'

export const getSnapshotsRouteHandler: RouteHandler<typeof getSnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnapshotsRouteHandler: RouteHandler<typeof postSnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSnapshotsIdRouteHandler: RouteHandler<typeof deleteSnapshotsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSnapshotsIdRouteHandler: RouteHandler<typeof getSnapshotsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSnapshotsIdBuildLogsRouteHandler: RouteHandler<
  typeof getSnapshotsIdBuildLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSnapshotsIdBuildLogsUrlRouteHandler: RouteHandler<
  typeof getSnapshotsIdBuildLogsUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnapshotsIdActivateRouteHandler: RouteHandler<
  typeof postSnapshotsIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnapshotsIdDeactivateRouteHandler: RouteHandler<
  typeof postSnapshotsIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
