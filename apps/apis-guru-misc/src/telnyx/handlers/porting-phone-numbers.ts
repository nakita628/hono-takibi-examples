import type { RouteHandler } from '@hono/zod-openapi'
import type { getPortingPhoneNumbersRoute } from '../routes'

export const getPortingPhoneNumbersRouteHandler: RouteHandler<
  typeof getPortingPhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
