import type { RouteHandler } from '@hono/zod-openapi'
import type { getSigninsRoute } from '../routes'

export const getSigninsRouteHandler: RouteHandler<typeof getSigninsRoute> = async (c) => {
  throw new Error('Not implemented')
}
