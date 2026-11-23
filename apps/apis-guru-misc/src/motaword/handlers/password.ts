import type { RouteHandler } from '@hono/zod-openapi'
import type { postPasswordRoute } from '../routes'

export const postPasswordRouteHandler: RouteHandler<typeof postPasswordRoute> = async (c) => {
  throw new Error('Not implemented')
}
