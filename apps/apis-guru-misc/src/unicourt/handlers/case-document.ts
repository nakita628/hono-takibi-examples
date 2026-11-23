import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseDocumentCaseDocumentIdRoute } from '../routes'

export const getCaseDocumentCaseDocumentIdRouteHandler: RouteHandler<
  typeof getCaseDocumentCaseDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
