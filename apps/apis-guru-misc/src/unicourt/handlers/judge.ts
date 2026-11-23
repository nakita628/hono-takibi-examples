import type { RouteHandler } from '@hono/zod-openapi'
import type { getJudgeJudgeIdRoute } from '../routes'

export const getJudgeJudgeIdRouteHandler: RouteHandler<typeof getJudgeJudgeIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
