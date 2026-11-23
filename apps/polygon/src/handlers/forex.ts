import type { RouteHandler } from '@hono/zod-openapi'
import type { getForexV1ExchangesRoute } from '../routes'

export const getForexV1ExchangesRouteHandler: RouteHandler<
  typeof getForexV1ExchangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
