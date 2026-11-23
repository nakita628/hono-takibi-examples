import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAnalysisSchemesRoute,
  postActionDescribeAnalysisSchemesRoute,
} from '../routes'

export const getActionDescribeAnalysisSchemesRouteHandler: RouteHandler<
  typeof getActionDescribeAnalysisSchemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAnalysisSchemesRouteHandler: RouteHandler<
  typeof postActionDescribeAnalysisSchemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
