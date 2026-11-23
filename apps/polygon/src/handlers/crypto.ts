import type { RouteHandler } from '@hono/zod-openapi'
import type { getCryptoV1ExchangesRoute } from '../routes'

export const getCryptoV1ExchangesRouteHandler: RouteHandler<
  typeof getCryptoV1ExchangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
