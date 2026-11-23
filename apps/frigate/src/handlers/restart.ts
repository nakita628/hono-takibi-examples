import type { RouteHandler } from '@hono/zod-openapi'
import type { postRestartRoute } from '../routes'

export const postRestartRouteHandler: RouteHandler<typeof postRestartRoute> = async (c) => {
  throw new Error('Not implemented')
}
