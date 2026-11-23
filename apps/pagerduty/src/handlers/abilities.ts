import type { RouteHandler } from '@hono/zod-openapi'
import type { getAbilitiesIdRoute, getAbilitiesRoute } from '../routes'

export const getAbilitiesRouteHandler: RouteHandler<typeof getAbilitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAbilitiesIdRouteHandler: RouteHandler<typeof getAbilitiesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
