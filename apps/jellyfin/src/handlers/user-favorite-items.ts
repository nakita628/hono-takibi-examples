import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserFavoriteItemsItemIdRoute,
  postUserFavoriteItemsItemIdRoute,
} from '../routes'

export const postUserFavoriteItemsItemIdRouteHandler: RouteHandler<
  typeof postUserFavoriteItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserFavoriteItemsItemIdRouteHandler: RouteHandler<
  typeof deleteUserFavoriteItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
