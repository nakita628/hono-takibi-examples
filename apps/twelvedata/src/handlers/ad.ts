import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdRoute } from '../routes'

export const getAdRouteHandler: RouteHandler<typeof getAdRoute> = async (c) => {
  throw new Error('Not implemented')
}
