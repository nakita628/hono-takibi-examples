import type { RouteHandler } from '@hono/zod-openapi'
import type { getValuationRoute } from '../routes'

export const getValuationRouteHandler: RouteHandler<typeof getValuationRoute> = async (c) => {
  throw new Error('Not implemented')
}
