import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCaseFiledDateRoute } from '../routes'

export const getCaseCountAnalyticsByCaseFiledDateRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCaseFiledDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
