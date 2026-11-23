import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartscanRoute } from '../routes'

export const postStartscanRouteHandler: RouteHandler<typeof postStartscanRoute> = async (c) => {
  throw new Error('Not implemented')
}
