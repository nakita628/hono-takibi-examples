import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByNormJudgeRoute } from '../routes'

export const getCaseCountAnalyticsByNormJudgeRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByNormJudgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
