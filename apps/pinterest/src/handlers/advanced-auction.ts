import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAdvancedAuctionItemsGetRoute,
  postAdvancedAuctionItemsSubmitRoute,
} from '../routes'

export const postAdvancedAuctionItemsGetRouteHandler: RouteHandler<
  typeof postAdvancedAuctionItemsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdvancedAuctionItemsSubmitRouteHandler: RouteHandler<
  typeof postAdvancedAuctionItemsSubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}
