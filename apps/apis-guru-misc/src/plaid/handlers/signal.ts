import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSignalDecisionReportRoute,
  postSignalEvaluateRoute,
  postSignalPrepareRoute,
  postSignalReturnReportRoute,
} from '../routes'

export const postSignalDecisionReportRouteHandler: RouteHandler<
  typeof postSignalDecisionReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSignalEvaluateRouteHandler: RouteHandler<typeof postSignalEvaluateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSignalPrepareRouteHandler: RouteHandler<typeof postSignalPrepareRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSignalReturnReportRouteHandler: RouteHandler<
  typeof postSignalReturnReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
