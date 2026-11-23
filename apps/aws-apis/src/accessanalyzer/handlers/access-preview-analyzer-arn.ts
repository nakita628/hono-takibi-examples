import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccessPreviewAnalyzerArnRoute } from '../routes'

export const getAccessPreviewAnalyzerArnRouteHandler: RouteHandler<
  typeof getAccessPreviewAnalyzerArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
