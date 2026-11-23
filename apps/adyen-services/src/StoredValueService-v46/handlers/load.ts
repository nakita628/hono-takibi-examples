import type { RouteHandler } from '@hono/zod-openapi'
import type { postLoadRoute } from '../routes'

export const postLoadRouteHandler: RouteHandler<typeof postLoadRoute> = async (c) => {
  throw new Error('Not implemented')
}
