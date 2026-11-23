import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLocalGatewayRouteTableRoute,
  postActionDeleteLocalGatewayRouteTableRoute,
} from '../routes'

export const getActionDeleteLocalGatewayRouteTableRouteHandler: RouteHandler<
  typeof getActionDeleteLocalGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLocalGatewayRouteTableRouteHandler: RouteHandler<
  typeof postActionDeleteLocalGatewayRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
