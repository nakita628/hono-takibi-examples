import type { RouteHandler } from '@hono/zod-openapi'
import type { getAvailablePhoneNumbersRoute } from '../routes'

export const getAvailablePhoneNumbersRouteHandler: RouteHandler<
  typeof getAvailablePhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
