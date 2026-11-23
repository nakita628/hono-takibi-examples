import type { RouteHandler } from '@hono/zod-openapi'
import type { getNormJudgeSearchNormJudgeSearchIdRoute, getNormJudgeSearchRoute } from '../routes'

export const getNormJudgeSearchRouteHandler: RouteHandler<typeof getNormJudgeSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNormJudgeSearchNormJudgeSearchIdRouteHandler: RouteHandler<
  typeof getNormJudgeSearchNormJudgeSearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
