import type { RouteHandler } from '@hono/zod-openapi'
import type { getSwissIdTrfRoute } from '../routes'

export const getSwissIdTrfRouteHandler: RouteHandler<typeof getSwissIdTrfRoute> = async (c) => {
  throw new Error('Not implemented')
}
