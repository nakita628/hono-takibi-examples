import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  getNumberOrderPhoneNumbersRoute,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
} from '../routes'

export const getNumberOrderPhoneNumbersRouteHandler: RouteHandler<
  typeof getNumberOrderPhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler: RouteHandler<
  typeof getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRouteHandler: RouteHandler<
  typeof patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
