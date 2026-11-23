import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthInfoRoute } from '../routes'

export const postAuthInfoRouteHandler: RouteHandler<typeof postAuthInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
