import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductEpidRoute } from '../routes'

export const getProductEpidRouteHandler: RouteHandler<typeof getProductEpidRoute> = async (c) => {
  throw new Error('Not implemented')
}
