import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteCarrierGatewayRoute,
  postActionDeleteCarrierGatewayRoute,
} from '../routes'

export const getActionDeleteCarrierGatewayRouteHandler: RouteHandler<
  typeof getActionDeleteCarrierGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCarrierGatewayRouteHandler: RouteHandler<
  typeof postActionDeleteCarrierGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
