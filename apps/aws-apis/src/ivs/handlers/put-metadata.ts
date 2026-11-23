import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutMetadataRoute } from '../routes'

export const postPutMetadataRouteHandler: RouteHandler<typeof postPutMetadataRoute> = async (c) => {
  throw new Error('Not implemented')
}
