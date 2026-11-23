import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTransitGatewayPolicyTableRoute,
  postActionCreateTransitGatewayPolicyTableRoute,
} from '../routes'

export const getActionCreateTransitGatewayPolicyTableRouteHandler: RouteHandler<
  typeof getActionCreateTransitGatewayPolicyTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTransitGatewayPolicyTableRouteHandler: RouteHandler<
  typeof postActionCreateTransitGatewayPolicyTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
