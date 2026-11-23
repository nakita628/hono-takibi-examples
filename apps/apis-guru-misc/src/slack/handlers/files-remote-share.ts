import type { RouteHandler } from '@hono/zod-openapi'
import type { getFilesRemoteShareRoute } from '../routes'

export const getFilesRemoteShareRouteHandler: RouteHandler<
  typeof getFilesRemoteShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
