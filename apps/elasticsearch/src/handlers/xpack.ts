import type { RouteHandler } from '@hono/zod-openapi'
import type { getXpackRoute, getXpackUsageRoute } from '../routes'

export const getXpackRouteHandler: RouteHandler<typeof getXpackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getXpackUsageRouteHandler: RouteHandler<typeof getXpackUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}
