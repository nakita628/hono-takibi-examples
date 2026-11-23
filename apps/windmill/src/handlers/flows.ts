import type { RouteHandler } from '@hono/zod-openapi'
import type { getFlowsHubGetIdRoute, getFlowsHubListRoute } from '../routes'

export const getFlowsHubListRouteHandler: RouteHandler<typeof getFlowsHubListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFlowsHubGetIdRouteHandler: RouteHandler<typeof getFlowsHubGetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
