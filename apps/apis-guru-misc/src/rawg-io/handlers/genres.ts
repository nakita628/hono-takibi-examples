import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenresIdRoute, getGenresRoute } from '../routes'

export const getGenresRouteHandler: RouteHandler<typeof getGenresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGenresIdRouteHandler: RouteHandler<typeof getGenresIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
