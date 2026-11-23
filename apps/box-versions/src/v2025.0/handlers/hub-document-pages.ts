import type { RouteHandler } from '@hono/zod-openapi'
import type { getHubDocumentPagesRoute } from '../routes'

export const getHubDocumentPagesRouteHandler: RouteHandler<
  typeof getHubDocumentPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
