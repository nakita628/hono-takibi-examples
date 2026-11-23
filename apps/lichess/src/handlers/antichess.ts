import type { RouteHandler } from '@hono/zod-openapi'
import type { getAntichessRoute } from '../routes'

export const getAntichessRouteHandler: RouteHandler<typeof getAntichessRoute> = async (c) => {
  throw new Error('Not implemented')
}
