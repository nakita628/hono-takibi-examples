import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateGroupRoute } from '../routes'

export const postUpdateGroupRouteHandler: RouteHandler<typeof postUpdateGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}
