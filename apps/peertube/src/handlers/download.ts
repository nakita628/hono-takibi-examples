import type { RouteHandler } from '@hono/zod-openapi'
import type { getDownloadVideosGenerateVideoIdOrUUIDRoute } from '../routes'

export const getDownloadVideosGenerateVideoIdOrUUIDRouteHandler: RouteHandler<
  typeof getDownloadVideosGenerateVideoIdOrUUIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
