import type { RouteHandler } from '@hono/zod-openapi'
import type { getConvertcurrencyRoute } from '../routes'

export const getConvertcurrencyRouteHandler: RouteHandler<typeof getConvertcurrencyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
