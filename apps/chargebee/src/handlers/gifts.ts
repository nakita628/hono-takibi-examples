import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGiftsGiftIdRoute,
  getGiftsRoute,
  postGiftsCreateForItemsRoute,
  postGiftsGiftIdCancelRoute,
  postGiftsGiftIdClaimRoute,
  postGiftsGiftIdUpdateGiftRoute,
} from '../routes'

export const postGiftsCreateForItemsRouteHandler: RouteHandler<
  typeof postGiftsCreateForItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGiftsGiftIdCancelRouteHandler: RouteHandler<
  typeof postGiftsGiftIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGiftsGiftIdUpdateGiftRouteHandler: RouteHandler<
  typeof postGiftsGiftIdUpdateGiftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGiftsRouteHandler: RouteHandler<typeof getGiftsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGiftsGiftIdRouteHandler: RouteHandler<typeof getGiftsGiftIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGiftsGiftIdClaimRouteHandler: RouteHandler<
  typeof postGiftsGiftIdClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}
