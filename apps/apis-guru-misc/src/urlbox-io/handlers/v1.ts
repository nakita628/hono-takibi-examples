import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1RenderSyncRoute } from '../routes'

export const postV1RenderSyncRouteHandler: RouteHandler<typeof postV1RenderSyncRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
