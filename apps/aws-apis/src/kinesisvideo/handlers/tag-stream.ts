import type { RouteHandler } from '@hono/zod-openapi'
import type { postTagStreamRoute } from '../routes'

export const postTagStreamRouteHandler: RouteHandler<typeof postTagStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}
