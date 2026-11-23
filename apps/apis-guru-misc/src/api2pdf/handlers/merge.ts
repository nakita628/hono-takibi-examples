import type { RouteHandler } from '@hono/zod-openapi'
import type { postMergeRoute } from '../routes'

export const postMergeRouteHandler: RouteHandler<typeof postMergeRoute> = async (c) => {
  throw new Error('Not implemented')
}
