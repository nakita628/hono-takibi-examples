import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocumentsDocumentIdRoute, getDocumentsRoute } from '../routes'

export const getDocumentsRouteHandler: RouteHandler<typeof getDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentsDocumentIdRouteHandler: RouteHandler<
  typeof getDocumentsDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
