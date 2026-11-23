import type { RouteHandler } from '@hono/zod-openapi'
import type { postScreendataRoute } from '../routes'

export const postScreendataRouteHandler: RouteHandler<typeof postScreendataRoute> = async (c) => {
  throw new Error('Not implemented')
}
