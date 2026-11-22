import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPayoutsListRoute,
  getPayoutsPayoutIdRoute,
  postPayoutsCreateRoute,
  postPayoutsFilterRoute,
  postPayoutsListRoute,
  postPayoutsPayoutIdCancelRoute,
  postPayoutsPayoutIdConfirmRoute,
  postPayoutsPayoutIdFulfillRoute,
  postPayoutsPayoutIdRoute,
} from '../routes'

export const postPayoutsCreateRouteHandler: RouteHandler<typeof postPayoutsCreateRoute> = async (
  c,
) => {}

export const getPayoutsPayoutIdRouteHandler: RouteHandler<typeof getPayoutsPayoutIdRoute> = async (
  c,
) => {}

export const postPayoutsPayoutIdRouteHandler: RouteHandler<
  typeof postPayoutsPayoutIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayoutsPayoutIdCancelRouteHandler: RouteHandler<
  typeof postPayoutsPayoutIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayoutsPayoutIdFulfillRouteHandler: RouteHandler<
  typeof postPayoutsPayoutIdFulfillRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayoutsListRouteHandler: RouteHandler<typeof getPayoutsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayoutsListRouteHandler: RouteHandler<typeof postPayoutsListRoute> = async (
  c,
) => {}

export const postPayoutsPayoutIdConfirmRouteHandler: RouteHandler<
  typeof postPayoutsPayoutIdConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayoutsFilterRouteHandler: RouteHandler<typeof postPayoutsFilterRoute> = async (
  c,
) => {}
