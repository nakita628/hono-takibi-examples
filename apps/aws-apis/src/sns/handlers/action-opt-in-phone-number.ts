import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionOptInPhoneNumberRoute, postActionOptInPhoneNumberRoute } from '../routes'

export const getActionOptInPhoneNumberRouteHandler: RouteHandler<
  typeof getActionOptInPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionOptInPhoneNumberRouteHandler: RouteHandler<
  typeof postActionOptInPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
