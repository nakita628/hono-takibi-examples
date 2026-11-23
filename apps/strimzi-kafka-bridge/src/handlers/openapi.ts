import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenapiRoute, getOpenapiV3Route } from '../routes'

export const getOpenapiRouteHandler: RouteHandler<typeof getOpenapiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOpenapiV3RouteHandler: RouteHandler<typeof getOpenapiV3Route> = async (c) => {
  throw new Error('Not implemented')
}
