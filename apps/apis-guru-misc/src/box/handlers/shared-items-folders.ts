import type { RouteHandler } from '@hono/zod-openapi'
import type { getSharedItemsFoldersRoute } from '../routes'

export const getSharedItemsFoldersRouteHandler: RouteHandler<
  typeof getSharedItemsFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
