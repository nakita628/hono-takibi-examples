import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteListsListIdBookmarksBookmarkIdRoute,
  deleteListsListIdRoute,
  getListsListIdBookmarksRoute,
  getListsListIdRoute,
  getListsRoute,
  patchListsListIdRoute,
  postListsRoute,
  putListsListIdBookmarksBookmarkIdRoute,
} from '../routes'

export const getListsRouteHandler: RouteHandler<typeof getListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postListsRouteHandler: RouteHandler<typeof postListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsListIdRouteHandler: RouteHandler<typeof getListsListIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteListsListIdRouteHandler: RouteHandler<typeof deleteListsListIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchListsListIdRouteHandler: RouteHandler<typeof patchListsListIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getListsListIdBookmarksRouteHandler: RouteHandler<
  typeof getListsListIdBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putListsListIdBookmarksBookmarkIdRouteHandler: RouteHandler<
  typeof putListsListIdBookmarksBookmarkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteListsListIdBookmarksBookmarkIdRouteHandler: RouteHandler<
  typeof deleteListsListIdBookmarksBookmarkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
