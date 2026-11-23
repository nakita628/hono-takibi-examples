import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatusRoute } from '../routes'

export const getStatusRouteHandler: RouteHandler<typeof getStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}
