import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisableRoute } from '../routes'

export const postDisableRouteHandler: RouteHandler<typeof postDisableRoute> = async (c) => {
  throw new Error('Not implemented')
}
