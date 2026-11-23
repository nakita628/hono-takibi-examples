import type { RouteHandler } from '@hono/zod-openapi'
import type { postMinuteUsageRoute } from '../routes'

export const postMinuteUsageRouteHandler: RouteHandler<typeof postMinuteUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}
