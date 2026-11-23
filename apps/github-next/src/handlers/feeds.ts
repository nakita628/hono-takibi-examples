import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeedsRoute } from '../routes'

export const getFeedsRouteHandler: RouteHandler<typeof getFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}
