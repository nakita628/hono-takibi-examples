import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsUsersRoute } from '../routes'

export const postDocumentsUsersRouteHandler: RouteHandler<typeof postDocumentsUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
