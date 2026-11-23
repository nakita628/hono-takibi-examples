import type { RouteHandler } from '@hono/zod-openapi'
import type { getFilesRemoteInfoRoute } from '../routes'

export const getFilesRemoteInfoRouteHandler: RouteHandler<typeof getFilesRemoteInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
