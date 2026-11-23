import type { RouteHandler } from '@hono/zod-openapi'
import type { getDataGaRoute, getDataMcfRoute, getDataRealtimeRoute } from '../routes'

export const getDataGaRouteHandler: RouteHandler<typeof getDataGaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataMcfRouteHandler: RouteHandler<typeof getDataMcfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataRealtimeRouteHandler: RouteHandler<typeof getDataRealtimeRoute> = async (c) => {
  throw new Error('Not implemented')
}
