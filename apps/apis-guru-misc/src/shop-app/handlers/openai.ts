import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenaiDetailsRoute, getOpenaiSearchRoute } from '../routes'

export const getOpenaiDetailsRouteHandler: RouteHandler<typeof getOpenaiDetailsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOpenaiSearchRouteHandler: RouteHandler<typeof getOpenaiSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
