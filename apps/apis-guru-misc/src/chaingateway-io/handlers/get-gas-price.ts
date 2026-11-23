import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetGasPriceRoute } from '../routes'

export const postGetGasPriceRouteHandler: RouteHandler<typeof postGetGasPriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
