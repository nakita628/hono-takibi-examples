import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceStatusRoute } from '../routes'

export const getServiceStatusRouteHandler: RouteHandler<typeof getServiceStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
