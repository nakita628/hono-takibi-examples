import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateFlowLogsRoute, postActionCreateFlowLogsRoute } from '../routes'

export const getActionCreateFlowLogsRouteHandler: RouteHandler<
  typeof getActionCreateFlowLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateFlowLogsRouteHandler: RouteHandler<
  typeof postActionCreateFlowLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
