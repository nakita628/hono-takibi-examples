import type { RouteHandler } from '@hono/zod-openapi'
import type { postForcemergeRoute } from '../routes'

export const postForcemergeRouteHandler: RouteHandler<typeof postForcemergeRoute> = async (c) => {
  throw new Error('Not implemented')
}
