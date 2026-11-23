import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetadataQueryIndicesRoute } from '../routes'

export const getMetadataQueryIndicesRouteHandler: RouteHandler<
  typeof getMetadataQueryIndicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
