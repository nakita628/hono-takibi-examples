import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListPhoneNumbersOptedOutRoute,
  postActionListPhoneNumbersOptedOutRoute,
} from '../routes'

export const getActionListPhoneNumbersOptedOutRouteHandler: RouteHandler<
  typeof getActionListPhoneNumbersOptedOutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPhoneNumbersOptedOutRouteHandler: RouteHandler<
  typeof postActionListPhoneNumbersOptedOutRoute
> = async (c) => {
  throw new Error('Not implemented')
}
