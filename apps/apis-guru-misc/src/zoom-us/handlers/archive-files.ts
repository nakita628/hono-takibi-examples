import type { RouteHandler } from '@hono/zod-openapi'
import type { getArchiveFilesRoute } from '../routes'

export const getArchiveFilesRouteHandler: RouteHandler<typeof getArchiveFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}
