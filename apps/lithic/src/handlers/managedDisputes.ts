import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2DisputesDisputeTokenRoute, getV2DisputesRoute } from '../routes'

export const getV2DisputesRouteHandler: RouteHandler<typeof getV2DisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DisputesDisputeTokenRouteHandler: RouteHandler<
  typeof getV2DisputesDisputeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
