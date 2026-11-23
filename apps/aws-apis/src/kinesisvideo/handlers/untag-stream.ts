import type { RouteHandler } from '@hono/zod-openapi'
import type { postUntagStreamRoute } from '../routes'

export const postUntagStreamRouteHandler: RouteHandler<typeof postUntagStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}
