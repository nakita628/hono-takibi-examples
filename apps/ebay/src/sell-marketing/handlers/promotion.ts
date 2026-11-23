import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPromotionPromotionIdGetListingSetRoute,
  getPromotionRoute,
  postPromotionPromotionIdPauseRoute,
  postPromotionPromotionIdResumeRoute,
} from '../routes'

export const getPromotionRouteHandler: RouteHandler<typeof getPromotionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPromotionPromotionIdGetListingSetRouteHandler: RouteHandler<
  typeof getPromotionPromotionIdGetListingSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPromotionPromotionIdPauseRouteHandler: RouteHandler<
  typeof postPromotionPromotionIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPromotionPromotionIdResumeRouteHandler: RouteHandler<
  typeof postPromotionPromotionIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
