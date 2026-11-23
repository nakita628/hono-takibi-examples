import type { RouteHandler } from '@hono/zod-openapi'
import type { getReceivedDocumentsGuidFormatRoute, postReceivedDocumentsRoute } from '../routes'

export const postReceivedDocumentsRouteHandler: RouteHandler<
  typeof postReceivedDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReceivedDocumentsGuidFormatRouteHandler: RouteHandler<
  typeof getReceivedDocumentsGuidFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
