import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBlockStorageIdRoute,
  getBlockStorageIdRoute,
  getBlockStorageRoute,
  postBlockStorageIdCreateSnapshotRoute,
  postBlockStorageRoute,
  putBlockStorageIdAttachRoute,
  putBlockStorageIdDetachRoute,
  putBlockStorageIdResizeVolumeRoute,
  putBlockStorageIdRoute,
} from '../routes'

export const putBlockStorageIdAttachRouteHandler: RouteHandler<
  typeof putBlockStorageIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlockStorageIdRouteHandler: RouteHandler<typeof getBlockStorageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBlockStorageIdRouteHandler: RouteHandler<typeof putBlockStorageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteBlockStorageIdRouteHandler: RouteHandler<
  typeof deleteBlockStorageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlockStorageIdCreateSnapshotRouteHandler: RouteHandler<
  typeof postBlockStorageIdCreateSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBlockStorageIdResizeVolumeRouteHandler: RouteHandler<
  typeof putBlockStorageIdResizeVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBlockStorageIdDetachRouteHandler: RouteHandler<
  typeof putBlockStorageIdDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlockStorageRouteHandler: RouteHandler<typeof getBlockStorageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlockStorageRouteHandler: RouteHandler<typeof postBlockStorageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
