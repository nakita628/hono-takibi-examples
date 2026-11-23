import type { RouteHandler } from '@hono/zod-openapi'
import type { postSwapIndexesRoute } from '../routes'

export const postSwapIndexesRouteHandler: RouteHandler<typeof postSwapIndexesRoute> = async (c) => {
  throw new Error('Not implemented')
}
