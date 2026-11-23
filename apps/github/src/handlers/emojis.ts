import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmojisRoute } from '../routes'

export const getEmojisRouteHandler: RouteHandler<typeof getEmojisRoute> = async (c) => {
  throw new Error('Not implemented')
}
