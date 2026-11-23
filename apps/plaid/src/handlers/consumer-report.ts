import type { RouteHandler } from '@hono/zod-openapi'
import type { postConsumerReportPdfGetRoute } from '../routes'

export const postConsumerReportPdfGetRouteHandler: RouteHandler<
  typeof postConsumerReportPdfGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
