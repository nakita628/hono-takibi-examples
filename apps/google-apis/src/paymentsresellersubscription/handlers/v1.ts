import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1NameRoute,
  getV1ParentProductsRoute,
  getV1ParentPromotionsRoute,
  postV1NameCancelRoute,
  postV1NameEntitleRoute,
  postV1NameExtendRoute,
  postV1NameUndoCancelRoute,
  postV1ParentPromotionsFindEligibleRoute,
  postV1ParentSubscriptionsProvisionRoute,
  postV1ParentSubscriptionsRoute,
} from '../routes'

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameEntitleRouteHandler: RouteHandler<typeof postV1NameEntitleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameExtendRouteHandler: RouteHandler<typeof postV1NameExtendRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameUndoCancelRouteHandler: RouteHandler<
  typeof postV1NameUndoCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentProductsRouteHandler: RouteHandler<
  typeof getV1ParentProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentPromotionsRouteHandler: RouteHandler<
  typeof getV1ParentPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentPromotionsFindEligibleRouteHandler: RouteHandler<
  typeof postV1ParentPromotionsFindEligibleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentSubscriptionsRouteHandler: RouteHandler<
  typeof postV1ParentSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentSubscriptionsProvisionRouteHandler: RouteHandler<
  typeof postV1ParentSubscriptionsProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
