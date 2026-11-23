import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVolumesSnapshotRoute,
  getVolumesExternalRoute,
  getVolumesRoute,
  getVolumesSnapshotRoute,
  postVolumesRoute,
  postVolumesSnapshotRoute,
} from '../routes'

export const getVolumesRouteHandler: RouteHandler<typeof getVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVolumesRouteHandler: RouteHandler<typeof postVolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesExternalRouteHandler: RouteHandler<typeof getVolumesExternalRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteVolumesSnapshotRouteHandler: RouteHandler<
  typeof deleteVolumesSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVolumesSnapshotRouteHandler: RouteHandler<typeof getVolumesSnapshotRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVolumesSnapshotRouteHandler: RouteHandler<
  typeof postVolumesSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
