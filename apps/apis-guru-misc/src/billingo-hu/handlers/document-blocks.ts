import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocumentBlocksRoute } from '../routes'

export const getDocumentBlocksRouteHandler: RouteHandler<typeof getDocumentBlocksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
