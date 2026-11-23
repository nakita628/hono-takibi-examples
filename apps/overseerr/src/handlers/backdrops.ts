import type { RouteHandler } from '@hono/zod-openapi'
import type { getBackdropsRoute } from '../routes'

export const getBackdropsRouteHandler: RouteHandler<typeof getBackdropsRoute> = async (c) => {
  throw new Error('Not implemented')
}
