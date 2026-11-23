import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteShopVacationRoute,
  getShopListingConditionsRoute,
  getShopPaymentMethodsRoute,
  getShopRoute,
  getShopVacationRoute,
  postShopVacationRoute,
  putShopRoute,
} from '../routes'

export const getShopRouteHandler: RouteHandler<typeof getShopRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putShopRouteHandler: RouteHandler<typeof putShopRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShopListingConditionsRouteHandler: RouteHandler<
  typeof getShopListingConditionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShopPaymentMethodsRouteHandler: RouteHandler<
  typeof getShopPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteShopVacationRouteHandler: RouteHandler<typeof deleteShopVacationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShopVacationRouteHandler: RouteHandler<typeof getShopVacationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postShopVacationRouteHandler: RouteHandler<typeof postShopVacationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
