import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdoscRoute } from '../routes'

export const getAdoscRouteHandler: RouteHandler<typeof getAdoscRoute> = async (c) => {
  throw new Error('Not implemented')
}
