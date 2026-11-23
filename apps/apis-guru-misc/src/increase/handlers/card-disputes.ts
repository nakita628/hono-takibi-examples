import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCardDisputesCardDisputeIdRoute,
  getCardDisputesRoute,
  postCardDisputesRoute,
} from '../routes'

export const getCardDisputesRouteHandler: RouteHandler<typeof getCardDisputesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCardDisputesRouteHandler: RouteHandler<typeof postCardDisputesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCardDisputesCardDisputeIdRouteHandler: RouteHandler<
  typeof getCardDisputesCardDisputeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
