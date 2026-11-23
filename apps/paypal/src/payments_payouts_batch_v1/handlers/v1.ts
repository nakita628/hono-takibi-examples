import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1PaymentsPayoutsIdRoute,
  getV1PaymentsPayoutsItemPayoutItemIdRoute,
  postV1PaymentsPayoutsItemPayoutItemIdCancelRoute,
  postV1PaymentsPayoutsRoute,
} from '../routes'

export const postV1PaymentsPayoutsRouteHandler: RouteHandler<
  typeof postV1PaymentsPayoutsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPayoutsIdRouteHandler: RouteHandler<
  typeof getV1PaymentsPayoutsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPayoutsItemPayoutItemIdRouteHandler: RouteHandler<
  typeof getV1PaymentsPayoutsItemPayoutItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsPayoutsItemPayoutItemIdCancelRouteHandler: RouteHandler<
  typeof postV1PaymentsPayoutsItemPayoutItemIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
