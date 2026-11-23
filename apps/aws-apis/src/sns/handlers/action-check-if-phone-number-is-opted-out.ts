import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCheckIfPhoneNumberIsOptedOutRoute,
  postActionCheckIfPhoneNumberIsOptedOutRoute,
} from '../routes'

export const getActionCheckIfPhoneNumberIsOptedOutRouteHandler: RouteHandler<
  typeof getActionCheckIfPhoneNumberIsOptedOutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCheckIfPhoneNumberIsOptedOutRouteHandler: RouteHandler<
  typeof postActionCheckIfPhoneNumberIsOptedOutRoute
> = async (c) => {
  throw new Error('Not implemented')
}
