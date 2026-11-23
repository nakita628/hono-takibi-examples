import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFoldersFolderIdRoute,
  getFoldersFolderIdRoute,
  getFoldersRoute,
  postFoldersRoute,
  putFoldersFolderIdRoute,
} from '../routes'

export const getFoldersRouteHandler: RouteHandler<typeof getFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersRouteHandler: RouteHandler<typeof postFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoldersFolderIdRouteHandler: RouteHandler<typeof getFoldersFolderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putFoldersFolderIdRouteHandler: RouteHandler<typeof putFoldersFolderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteFoldersFolderIdRouteHandler: RouteHandler<
  typeof deleteFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
