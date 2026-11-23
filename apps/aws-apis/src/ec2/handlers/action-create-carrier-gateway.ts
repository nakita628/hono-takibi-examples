import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCarrierGatewayRoute,
  postActionCreateCarrierGatewayRoute,
} from '../routes'

export const getActionCreateCarrierGatewayRouteHandler: RouteHandler<
  typeof getActionCreateCarrierGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCarrierGatewayRouteHandler: RouteHandler<
  typeof postActionCreateCarrierGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
