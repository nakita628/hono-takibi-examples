import type { RouteHandler } from '@hono/zod-openapi'
import type { getResolveRoute } from '../routes'

export const getResolveRouteHandler: RouteHandler<typeof getResolveRoute> = async (c) => {
  throw new Error('Not implemented')
}
