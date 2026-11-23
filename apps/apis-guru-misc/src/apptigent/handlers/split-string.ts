import type { RouteHandler } from '@hono/zod-openapi'
import type { postSplitStringRoute } from '../routes'

export const postSplitStringRouteHandler: RouteHandler<typeof postSplitStringRoute> = async (c) => {
  throw new Error('Not implemented')
}
