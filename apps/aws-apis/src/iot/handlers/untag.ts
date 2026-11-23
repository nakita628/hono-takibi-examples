import type { RouteHandler } from '@hono/zod-openapi'
import type { postUntagRoute } from '../routes'

export const postUntagRouteHandler: RouteHandler<typeof postUntagRoute> = async (c) => {
  throw new Error('Not implemented')
}
