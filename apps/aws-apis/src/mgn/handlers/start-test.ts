import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartTestRoute } from '../routes'

export const postStartTestRouteHandler: RouteHandler<typeof postStartTestRoute> = async (c) => {
  throw new Error('Not implemented')
}
