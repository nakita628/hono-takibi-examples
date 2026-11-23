import type { RouteHandler } from '@hono/zod-openapi'
import type { getFileDownloadFileIdRoute } from '../routes'

export const getFileDownloadFileIdRouteHandler: RouteHandler<
  typeof getFileDownloadFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
