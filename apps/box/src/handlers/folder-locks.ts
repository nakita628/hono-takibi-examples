import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFolderLocksFolderLockIdRoute,
  getFolderLocksRoute,
  postFolderLocksRoute,
} from '../routes'

export const getFolderLocksRouteHandler: RouteHandler<typeof getFolderLocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFolderLocksRouteHandler: RouteHandler<typeof postFolderLocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFolderLocksFolderLockIdRouteHandler: RouteHandler<
  typeof deleteFolderLocksFolderLockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
