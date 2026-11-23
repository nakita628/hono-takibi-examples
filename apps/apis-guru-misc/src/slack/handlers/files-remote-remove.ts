import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesRemoteRemoveRoute } from '../routes'

export const postFilesRemoteRemoveRouteHandler: RouteHandler<
  typeof postFilesRemoteRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
