import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionExportTransitGatewayRoutesRoute,
  postActionExportTransitGatewayRoutesRoute,
} from '../routes'

export const getActionExportTransitGatewayRoutesRouteHandler: RouteHandler<
  typeof getActionExportTransitGatewayRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionExportTransitGatewayRoutesRouteHandler: RouteHandler<
  typeof postActionExportTransitGatewayRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
