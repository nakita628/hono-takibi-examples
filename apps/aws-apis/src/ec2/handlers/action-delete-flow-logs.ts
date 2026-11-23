import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteFlowLogsRoute, postActionDeleteFlowLogsRoute } from '../routes'

export const getActionDeleteFlowLogsRouteHandler: RouteHandler<
  typeof getActionDeleteFlowLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteFlowLogsRouteHandler: RouteHandler<
  typeof postActionDeleteFlowLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
