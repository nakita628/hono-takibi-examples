import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2AccountRoute } from '../routes'

export const getV2AccountRouteHandler: RouteHandler<typeof getV2AccountRoute> = async (c) => {
  throw new Error('Not implemented')
}
