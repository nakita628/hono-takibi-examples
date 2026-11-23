import type { RouteHandler } from '@hono/zod-openapi'
import type { postExportUsersRoute } from '../routes'

export const postExportUsersRouteHandler: RouteHandler<typeof postExportUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
