import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChannelFoldersRoute,
  patchChannelFoldersChannelFolderIdRoute,
  patchChannelFoldersRoute,
  postChannelFoldersCreateRoute,
} from '../routes'

export const postChannelFoldersCreateRouteHandler: RouteHandler<
  typeof postChannelFoldersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelFoldersRouteHandler: RouteHandler<typeof getChannelFoldersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchChannelFoldersRouteHandler: RouteHandler<
  typeof patchChannelFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchChannelFoldersChannelFolderIdRouteHandler: RouteHandler<
  typeof patchChannelFoldersChannelFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
