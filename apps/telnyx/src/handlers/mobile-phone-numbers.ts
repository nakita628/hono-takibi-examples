import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMobilePhoneNumbersIdMessagingRoute,
  getMobilePhoneNumbersIdRoute,
  getMobilePhoneNumbersMessagingRoute,
  getMobilePhoneNumbersRoute,
  patchMobilePhoneNumbersIdRoute,
} from '../routes'

export const getMobilePhoneNumbersRouteHandler: RouteHandler<
  typeof getMobilePhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMobilePhoneNumbersMessagingRouteHandler: RouteHandler<
  typeof getMobilePhoneNumbersMessagingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMobilePhoneNumbersIdRouteHandler: RouteHandler<
  typeof getMobilePhoneNumbersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMobilePhoneNumbersIdRouteHandler: RouteHandler<
  typeof patchMobilePhoneNumbersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMobilePhoneNumbersIdMessagingRouteHandler: RouteHandler<
  typeof getMobilePhoneNumbersIdMessagingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
