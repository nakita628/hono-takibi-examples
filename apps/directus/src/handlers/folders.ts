import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFoldersIdRoute,
  deleteFoldersRoute,
  getFoldersIdRoute,
  getFoldersRoute,
  patchFoldersIdRoute,
  patchFoldersRoute,
  postFoldersRoute,
} from '../routes'

export const getFoldersRouteHandler: RouteHandler<typeof getFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersRouteHandler: RouteHandler<typeof postFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFoldersRouteHandler: RouteHandler<typeof patchFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFoldersRouteHandler: RouteHandler<typeof deleteFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoldersIdRouteHandler: RouteHandler<typeof getFoldersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFoldersIdRouteHandler: RouteHandler<typeof patchFoldersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFoldersIdRouteHandler: RouteHandler<typeof deleteFoldersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
