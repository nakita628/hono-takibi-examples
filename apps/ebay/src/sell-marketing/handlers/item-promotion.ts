import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteItemPromotionPromotionIdRoute,
  getItemPromotionPromotionIdRoute,
  postItemPromotionRoute,
  putItemPromotionPromotionIdRoute,
} from '../routes'

export const postItemPromotionRouteHandler: RouteHandler<typeof postItemPromotionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteItemPromotionPromotionIdRouteHandler: RouteHandler<
  typeof deleteItemPromotionPromotionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemPromotionPromotionIdRouteHandler: RouteHandler<
  typeof getItemPromotionPromotionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putItemPromotionPromotionIdRouteHandler: RouteHandler<
  typeof putItemPromotionPromotionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
