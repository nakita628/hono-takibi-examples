import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseDocumentDownloadCaseDocumentIdRoute } from '../routes'

export const getCaseDocumentDownloadCaseDocumentIdRouteHandler: RouteHandler<
  typeof getCaseDocumentDownloadCaseDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
