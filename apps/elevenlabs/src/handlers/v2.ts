import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2VoicesRoute } from '../routes'

export const getV2VoicesRouteHandler: RouteHandler<typeof getV2VoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}
