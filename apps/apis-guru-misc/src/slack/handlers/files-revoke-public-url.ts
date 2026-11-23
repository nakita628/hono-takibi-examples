import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesRevokePublicURLRoute } from '../routes'

export const postFilesRevokePublicURLRouteHandler: RouteHandler<
  typeof postFilesRevokePublicURLRoute
> = async (c) => {
  throw new Error('Not implemented')
}
