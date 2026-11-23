import type { RouteHandler } from '@hono/zod-openapi'
import type { postMapRoute } from '../routes'

export const postMapRouteHandler: RouteHandler<typeof postMapRoute> = async (c) => {
  throw new Error('Not implemented')
}
