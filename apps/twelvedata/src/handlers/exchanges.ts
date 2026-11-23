import type { RouteHandler } from '@hono/zod-openapi'
import type { getExchangesRoute } from '../routes'

export const getExchangesRouteHandler: RouteHandler<typeof getExchangesRoute> = async (c) => {
  throw new Error('Not implemented')
}
