import type { RouteHandler } from '@hono/zod-openapi'
import type { postLoginRoute } from '../routes'

export const postLoginRouteHandler: RouteHandler<typeof postLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}
