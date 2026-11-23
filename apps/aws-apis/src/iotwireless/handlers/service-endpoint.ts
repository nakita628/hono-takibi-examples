import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceEndpointRoute } from '../routes'

export const getServiceEndpointRouteHandler: RouteHandler<typeof getServiceEndpointRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
