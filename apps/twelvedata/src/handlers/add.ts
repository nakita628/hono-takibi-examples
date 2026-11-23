import type { RouteHandler } from '@hono/zod-openapi'
import type { getAddRoute } from '../routes'

export const getAddRouteHandler: RouteHandler<typeof getAddRoute> = async (c) => {
  throw new Error('Not implemented')
}
