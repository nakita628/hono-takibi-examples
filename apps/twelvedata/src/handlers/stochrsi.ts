import type { RouteHandler } from '@hono/zod-openapi'
import type { getStochrsiRoute } from '../routes'

export const getStochrsiRouteHandler: RouteHandler<typeof getStochrsiRoute> = async (c) => {
  throw new Error('Not implemented')
}
