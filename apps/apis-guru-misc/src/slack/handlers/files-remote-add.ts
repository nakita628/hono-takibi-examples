import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesRemoteAddRoute } from '../routes'

export const postFilesRemoteAddRouteHandler: RouteHandler<typeof postFilesRemoteAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
