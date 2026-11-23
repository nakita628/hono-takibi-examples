import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreditsIdRoute, getCreditsRoute } from '../routes'

export const getCreditsRouteHandler: RouteHandler<typeof getCreditsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCreditsIdRouteHandler: RouteHandler<typeof getCreditsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
