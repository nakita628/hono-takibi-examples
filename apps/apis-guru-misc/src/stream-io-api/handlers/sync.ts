import type { RouteHandler } from '@hono/zod-openapi'
import type { postSyncRoute } from '../routes'

export const postSyncRouteHandler: RouteHandler<typeof postSyncRoute> = async (c) => {
  throw new Error('Not implemented')
}
