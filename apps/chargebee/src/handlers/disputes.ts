import type { RouteHandler } from '@hono/zod-openapi'
import type { getDisputesDisputeIdRoute, getDisputesRoute } from '../routes'

export const getDisputesDisputeIdRouteHandler: RouteHandler<
  typeof getDisputesDisputeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesRouteHandler: RouteHandler<typeof getDisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}
