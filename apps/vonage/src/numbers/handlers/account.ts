import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountNumbersRoute } from '../routes'

export const getAccountNumbersRouteHandler: RouteHandler<typeof getAccountNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
