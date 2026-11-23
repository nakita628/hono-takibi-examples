import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesRemoteUpdateRoute } from '../routes'

export const postFilesRemoteUpdateRouteHandler: RouteHandler<
  typeof postFilesRemoteUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
