import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiLogsRequestIdRoute, getApiLogsRoute } from '../routes'

export const getApiLogsRouteHandler: RouteHandler<typeof getApiLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLogsRequestIdRouteHandler: RouteHandler<
  typeof getApiLogsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
