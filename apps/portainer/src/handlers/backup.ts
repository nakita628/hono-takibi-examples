import type { RouteHandler } from '@hono/zod-openapi'
import type { postBackupRoute } from '../routes'

export const postBackupRouteHandler: RouteHandler<typeof postBackupRoute> = async (c) => {
  throw new Error('Not implemented')
}
