import type { RouteHandler } from '@hono/zod-openapi'
import type { postFileJsonRoute, postFileRoute } from '../routes'

export const postFileRouteHandler: RouteHandler<typeof postFileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFileJsonRouteHandler: RouteHandler<typeof postFileJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
