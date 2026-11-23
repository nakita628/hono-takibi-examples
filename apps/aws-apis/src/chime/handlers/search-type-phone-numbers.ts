import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchTypePhoneNumbersRoute } from '../routes'

export const getSearchTypePhoneNumbersRouteHandler: RouteHandler<
  typeof getSearchTypePhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
