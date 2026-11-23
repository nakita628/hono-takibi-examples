import type { RouteHandler } from '@hono/zod-openapi'
import type { getPersonasIdRoute, getPersonasRoute } from '../routes'

export const getPersonasRouteHandler: RouteHandler<typeof getPersonasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPersonasIdRouteHandler: RouteHandler<typeof getPersonasIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
