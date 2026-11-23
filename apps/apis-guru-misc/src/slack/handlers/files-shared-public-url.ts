import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesSharedPublicURLRoute } from '../routes'

export const postFilesSharedPublicURLRouteHandler: RouteHandler<
  typeof postFilesSharedPublicURLRoute
> = async (c) => {
  throw new Error('Not implemented')
}
