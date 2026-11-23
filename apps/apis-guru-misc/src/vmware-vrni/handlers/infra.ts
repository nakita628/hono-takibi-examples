import type { RouteHandler } from '@hono/zod-openapi'
import type { getInfraNodesIdRoute, getInfraNodesRoute } from '../routes'

export const getInfraNodesRouteHandler: RouteHandler<typeof getInfraNodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfraNodesIdRouteHandler: RouteHandler<typeof getInfraNodesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
