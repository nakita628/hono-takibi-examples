import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteShareholdersRoute } from '../routes'

export const postDeleteShareholdersRouteHandler: RouteHandler<
  typeof postDeleteShareholdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
