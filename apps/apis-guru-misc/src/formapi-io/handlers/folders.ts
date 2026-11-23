import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFoldersFolderIdRoute,
  getFoldersIndexRoute,
  postFoldersFolderIdMoveRoute,
  postFoldersFolderIdRenameRoute,
  postFoldersIndexRoute,
} from '../routes'

export const getFoldersIndexRouteHandler: RouteHandler<typeof getFoldersIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersIndexRouteHandler: RouteHandler<typeof postFoldersIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteFoldersFolderIdRouteHandler: RouteHandler<
  typeof deleteFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersFolderIdMoveRouteHandler: RouteHandler<
  typeof postFoldersFolderIdMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersFolderIdRenameRouteHandler: RouteHandler<
  typeof postFoldersFolderIdRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
