import type { RouteHandler } from '@hono/zod-openapi'
import type { postAbortRoute } from '../routes'

export const postAbortRouteHandler: RouteHandler<typeof postAbortRoute> = async (c) => {
  throw new Error('Not implemented')
}
