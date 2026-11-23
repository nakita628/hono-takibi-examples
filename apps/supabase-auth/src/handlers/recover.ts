import type { RouteHandler } from '@hono/zod-openapi'
import type { postRecoverRoute } from '../routes'

export const postRecoverRouteHandler: RouteHandler<typeof postRecoverRoute> = async (c) => {
  throw new Error('Not implemented')
}
