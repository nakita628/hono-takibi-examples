import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentDetectFieldsRoute } from '../routes'

export const postDocumentDetectFieldsRouteHandler: RouteHandler<
  typeof postDocumentDetectFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
