import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFoldersFolderUidRoute,
  getFoldersFolderUidCountsRoute,
  getFoldersFolderUidPermissionsRoute,
  getFoldersFolderUidRoute,
  getFoldersRoute,
  postFoldersFolderUidMoveRoute,
  postFoldersFolderUidPermissionsRoute,
  postFoldersRoute,
  putFoldersFolderUidRoute,
} from '../routes'

export const getFoldersRouteHandler: RouteHandler<typeof getFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersRouteHandler: RouteHandler<typeof postFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFoldersFolderUidRouteHandler: RouteHandler<
  typeof deleteFoldersFolderUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoldersFolderUidRouteHandler: RouteHandler<
  typeof getFoldersFolderUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFoldersFolderUidRouteHandler: RouteHandler<
  typeof putFoldersFolderUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoldersFolderUidCountsRouteHandler: RouteHandler<
  typeof getFoldersFolderUidCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersFolderUidMoveRouteHandler: RouteHandler<
  typeof postFoldersFolderUidMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoldersFolderUidPermissionsRouteHandler: RouteHandler<
  typeof getFoldersFolderUidPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersFolderUidPermissionsRouteHandler: RouteHandler<
  typeof postFoldersFolderUidPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
