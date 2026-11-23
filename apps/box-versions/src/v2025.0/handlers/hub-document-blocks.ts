import type { RouteHandler } from '@hono/zod-openapi'
import type { getHubDocumentBlocksRoute } from '../routes'

export const getHubDocumentBlocksRouteHandler: RouteHandler<
  typeof getHubDocumentBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
