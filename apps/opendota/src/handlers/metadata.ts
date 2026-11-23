import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetadataRoute } from '../routes'

export const getMetadataRouteHandler: RouteHandler<typeof getMetadataRoute> = async (c) => {
  throw new Error('Not implemented')
}
