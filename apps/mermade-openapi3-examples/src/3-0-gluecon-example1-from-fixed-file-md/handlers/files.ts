import type { RouteHandler } from '@hono/zod-openapi'
import type { putFilesFilenameRoute } from '../routes'

export const putFilesFilenameRouteHandler: RouteHandler<typeof putFilesFilenameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
