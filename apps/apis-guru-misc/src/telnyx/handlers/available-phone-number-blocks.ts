import type { RouteHandler } from '@hono/zod-openapi'
import type { getAvailablePhoneNumberBlocksRoute } from '../routes'

export const getAvailablePhoneNumberBlocksRouteHandler: RouteHandler<
  typeof getAvailablePhoneNumberBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
