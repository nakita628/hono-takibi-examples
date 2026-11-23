import type { RouteHandler } from '@hono/zod-openapi'
import type { postImproveRoute } from '../routes'

export const postImproveRouteHandler: RouteHandler<typeof postImproveRoute> = async (c) => {
  throw new Error('Not implemented')
}
