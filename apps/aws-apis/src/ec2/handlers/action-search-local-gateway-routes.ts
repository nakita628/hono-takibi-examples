import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSearchLocalGatewayRoutesRoute,
  postActionSearchLocalGatewayRoutesRoute,
} from '../routes'

export const getActionSearchLocalGatewayRoutesRouteHandler: RouteHandler<
  typeof getActionSearchLocalGatewayRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSearchLocalGatewayRoutesRouteHandler: RouteHandler<
  typeof postActionSearchLocalGatewayRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
