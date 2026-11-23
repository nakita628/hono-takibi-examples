import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentBackupsRoute,
  getV1ParentInstancesRoute,
  getV1ParentSnapshotsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameRestoreRoute,
  postV1NameRevertRoute,
  postV1ParentBackupsRoute,
  postV1ParentInstancesRoute,
  postV1ParentSnapshotsRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameLocationsRouteHandler: RouteHandler<typeof getV1NameLocationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NameOperationsRouteHandler: RouteHandler<
  typeof getV1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameRestoreRouteHandler: RouteHandler<typeof postV1NameRestoreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameRevertRouteHandler: RouteHandler<typeof postV1NameRevertRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentBackupsRouteHandler: RouteHandler<typeof getV1ParentBackupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentBackupsRouteHandler: RouteHandler<
  typeof postV1ParentBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentInstancesRouteHandler: RouteHandler<
  typeof getV1ParentInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentInstancesRouteHandler: RouteHandler<
  typeof postV1ParentInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentSnapshotsRouteHandler: RouteHandler<
  typeof getV1ParentSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentSnapshotsRouteHandler: RouteHandler<
  typeof postV1ParentSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
