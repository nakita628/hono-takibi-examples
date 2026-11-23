import type { RouteHandler } from '@hono/zod-openapi'
import type { getFilesRemoteListRoute } from '../routes'

export const getFilesRemoteListRouteHandler: RouteHandler<typeof getFilesRemoteListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
