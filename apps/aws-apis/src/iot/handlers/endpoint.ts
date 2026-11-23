import type { RouteHandler } from '@hono/zod-openapi'
import type { getEndpointRoute } from '../routes'

export const getEndpointRouteHandler: RouteHandler<typeof getEndpointRoute> = async (c) => {
  throw new Error('Not implemented')
}
