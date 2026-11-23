import type { RouteHandler } from '@hono/zod-openapi'
import type { postWorldTimeRoute } from '../routes'

export const postWorldTimeRouteHandler: RouteHandler<typeof postWorldTimeRoute> = async (c) => {
  throw new Error('Not implemented')
}
