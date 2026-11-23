import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeployTargetIdRoute, getDeployTargetRoute } from '../routes'

export const getDeployTargetRouteHandler: RouteHandler<typeof getDeployTargetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeployTargetIdRouteHandler: RouteHandler<typeof getDeployTargetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
