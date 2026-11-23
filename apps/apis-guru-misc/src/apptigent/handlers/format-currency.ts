import type { RouteHandler } from '@hono/zod-openapi'
import type { postFormatCurrencyRoute } from '../routes'

export const postFormatCurrencyRouteHandler: RouteHandler<typeof postFormatCurrencyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
