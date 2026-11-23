import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDiscountsDiscountIdRoute,
  getDiscountsRoute,
  patchDiscountsDiscountIdRoute,
  postDiscountsRoute,
} from '../routes'

export const getDiscountsRouteHandler: RouteHandler<typeof getDiscountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDiscountsRouteHandler: RouteHandler<typeof postDiscountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDiscountsDiscountIdRouteHandler: RouteHandler<
  typeof getDiscountsDiscountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDiscountsDiscountIdRouteHandler: RouteHandler<
  typeof patchDiscountsDiscountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
