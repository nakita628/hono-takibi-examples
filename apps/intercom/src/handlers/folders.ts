import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFoldersRoute,
  postFoldersRoute,
  getFoldersIdRoute,
  putFoldersIdRoute,
  deleteFoldersIdRoute,
} from '../routes'

export const getFoldersRouteHandler: RouteHandler<typeof getFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFoldersRouteHandler: RouteHandler<typeof postFoldersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFoldersIdRouteHandler: RouteHandler<typeof getFoldersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFoldersIdRouteHandler: RouteHandler<typeof putFoldersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFoldersIdRouteHandler: RouteHandler<typeof deleteFoldersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
