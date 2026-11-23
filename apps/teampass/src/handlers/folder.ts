import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFolderDeleteRoute,
  getFolderListFoldersRoute,
  getFolderWritableFoldersRoute,
  postFolderCreateRoute,
  putFolderUpdateRoute,
} from '../routes'

export const getFolderListFoldersRouteHandler: RouteHandler<
  typeof getFolderListFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFolderWritableFoldersRouteHandler: RouteHandler<
  typeof getFolderWritableFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFolderCreateRouteHandler: RouteHandler<typeof postFolderCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putFolderUpdateRouteHandler: RouteHandler<typeof putFolderUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFolderDeleteRouteHandler: RouteHandler<typeof deleteFolderDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
