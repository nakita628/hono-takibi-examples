import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteUserPlayedItemsItemIdRoute, postUserPlayedItemsItemIdRoute } from '../routes'

export const postUserPlayedItemsItemIdRouteHandler: RouteHandler<
  typeof postUserPlayedItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserPlayedItemsItemIdRouteHandler: RouteHandler<
  typeof deleteUserPlayedItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
