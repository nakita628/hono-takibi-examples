import type { RouteHandler } from '@hono/zod-openapi'
import type { getDownloadResourceNameRoute } from '../routes'

export const getDownloadResourceNameRouteHandler: RouteHandler<
  typeof getDownloadResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
