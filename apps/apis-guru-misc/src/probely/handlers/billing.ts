import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBillingIndexRoute,
  patchBillingIndexRoute,
  postBillingActionsIndexRoute,
  postBillingEstimateIndexRoute,
  postBillingSubscribeIndexRoute,
  putBillingIndexRoute,
} from '../routes'

export const getBillingIndexRouteHandler: RouteHandler<typeof getBillingIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBillingIndexRouteHandler: RouteHandler<typeof patchBillingIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBillingIndexRouteHandler: RouteHandler<typeof putBillingIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBillingActionsIndexRouteHandler: RouteHandler<
  typeof postBillingActionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBillingEstimateIndexRouteHandler: RouteHandler<
  typeof postBillingEstimateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBillingSubscribeIndexRouteHandler: RouteHandler<
  typeof postBillingSubscribeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
