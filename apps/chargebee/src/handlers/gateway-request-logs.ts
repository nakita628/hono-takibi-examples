import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGatewayRequestLogsGatewayRequestLogLogIdRoute,
  getGatewayRequestLogsRoute,
} from '../routes'

export const getGatewayRequestLogsGatewayRequestLogLogIdRouteHandler: RouteHandler<
  typeof getGatewayRequestLogsGatewayRequestLogLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGatewayRequestLogsRouteHandler: RouteHandler<
  typeof getGatewayRequestLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
