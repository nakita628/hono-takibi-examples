import type { RouteHandler } from '@hono/zod-openapi'
import type { getNumberLookupPhoneNumberRoute } from '../routes'

export const getNumberLookupPhoneNumberRouteHandler: RouteHandler<
  typeof getNumberLookupPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
