import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthGetRoute } from '../routes'

export const postAuthGetRouteHandler: RouteHandler<typeof postAuthGetRoute> = async (c) => {
  throw new Error('Not implemented')
}
