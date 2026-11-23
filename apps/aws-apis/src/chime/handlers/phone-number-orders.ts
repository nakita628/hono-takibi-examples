import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPhoneNumberOrdersPhoneNumberOrderIdRoute,
  getPhoneNumberOrdersRoute,
  postPhoneNumberOrdersRoute,
} from '../routes'

export const postPhoneNumberOrdersRouteHandler: RouteHandler<
  typeof postPhoneNumberOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhoneNumberOrdersRouteHandler: RouteHandler<
  typeof getPhoneNumberOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhoneNumberOrdersPhoneNumberOrderIdRouteHandler: RouteHandler<
  typeof getPhoneNumberOrdersPhoneNumberOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
