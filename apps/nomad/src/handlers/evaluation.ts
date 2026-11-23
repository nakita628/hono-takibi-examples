import type { RouteHandler } from '@hono/zod-openapi'
import type { getEvaluationEvalIDAllocationsRoute, getEvaluationEvalIDRoute } from '../routes'

export const getEvaluationEvalIDRouteHandler: RouteHandler<
  typeof getEvaluationEvalIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEvaluationEvalIDAllocationsRouteHandler: RouteHandler<
  typeof getEvaluationEvalIDAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
