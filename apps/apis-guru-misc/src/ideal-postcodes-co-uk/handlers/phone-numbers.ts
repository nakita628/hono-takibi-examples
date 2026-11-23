import type { RouteHandler } from '@hono/zod-openapi'
import type { getPhoneNumbersRoute } from '../routes'

export const getPhoneNumbersRouteHandler: RouteHandler<typeof getPhoneNumbersRoute> = async (c) => {
  throw new Error('Not implemented')
}
