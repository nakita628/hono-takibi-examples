import type { RouteHandler } from '@hono/zod-openapi'
import type { getFlowsFlowIdRoute, getFlowsRoute } from '../routes'

export const getFlowsRouteHandler: RouteHandler<typeof getFlowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFlowsFlowIdRouteHandler: RouteHandler<typeof getFlowsFlowIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
