import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReputationNumbersPhoneNumberRoute,
  getReputationNumbersPhoneNumberRoute,
  getReputationNumbersRoute,
} from '../routes'

export const getReputationNumbersRouteHandler: RouteHandler<
  typeof getReputationNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReputationNumbersPhoneNumberRouteHandler: RouteHandler<
  typeof deleteReputationNumbersPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReputationNumbersPhoneNumberRouteHandler: RouteHandler<
  typeof getReputationNumbersPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
