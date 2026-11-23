import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateRoute } from '../routes'

export const postUpdateRouteHandler: RouteHandler<typeof postUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}
