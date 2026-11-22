import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCouponsIdRoute,
  getCouponsRedemptionsIdRoute,
  getCouponsRedemptionsRoute,
  getCouponsRoute,
  postCouponsIdExpirationRoute,
  postCouponsRedemptionsIdCancelRoute,
  postCouponsRedemptionsRoute,
  postCouponsRoute,
  putCouponsIdRoute,
} from '../routes'

export const getCouponsRouteHandler: RouteHandler<typeof getCouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsRouteHandler: RouteHandler<typeof postCouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponsRedemptionsRouteHandler: RouteHandler<
  typeof getCouponsRedemptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsRedemptionsRouteHandler: RouteHandler<
  typeof postCouponsRedemptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponsRedemptionsIdRouteHandler: RouteHandler<
  typeof getCouponsRedemptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsRedemptionsIdCancelRouteHandler: RouteHandler<
  typeof postCouponsRedemptionsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponsIdRouteHandler: RouteHandler<typeof getCouponsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCouponsIdRouteHandler: RouteHandler<typeof putCouponsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsIdExpirationRouteHandler: RouteHandler<
  typeof postCouponsIdExpirationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
