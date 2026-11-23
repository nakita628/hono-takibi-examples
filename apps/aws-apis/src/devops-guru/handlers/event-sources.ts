import type { RouteHandler } from '@hono/zod-openapi'
import type { postEventSourcesRoute, putEventSourcesRoute } from '../routes'

export const postEventSourcesRouteHandler: RouteHandler<typeof postEventSourcesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putEventSourcesRouteHandler: RouteHandler<typeof putEventSourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}
