import type { RouteHandler } from '@hono/zod-openapi'
import type { getInstanceTypeIdRoute, getInstanceTypeRoute } from '../routes'

export const getInstanceTypeIdRouteHandler: RouteHandler<typeof getInstanceTypeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInstanceTypeRouteHandler: RouteHandler<typeof getInstanceTypeRoute> = async (c) => {
  throw new Error('Not implemented')
}
