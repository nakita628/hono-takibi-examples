import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetUtcTimeRoute } from '../routes'

export const getGetUtcTimeRouteHandler: RouteHandler<typeof getGetUtcTimeRoute> = async (c) => {
  throw new Error('Not implemented')
}
