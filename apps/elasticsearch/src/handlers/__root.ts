import type { RouteHandler } from '@hono/zod-openapi'
import type { getRoute, headRoute } from '../routes'

export const getRouteHandler: RouteHandler<typeof getRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headRouteHandler: RouteHandler<typeof headRoute> = async (c) => {
  throw new Error('Not implemented')
}
