import type { RouteHandler } from '@hono/zod-openapi'
import type { getGatewayBotRoute, getGatewayRoute } from '../routes'

export const getGatewayRouteHandler: RouteHandler<typeof getGatewayRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGatewayBotRouteHandler: RouteHandler<typeof getGatewayBotRoute> = async (c) => {
  throw new Error('Not implemented')
}
