import type { RouteHandler } from '@hono/zod-openapi'
import type { postReplaceRoute } from '../routes'

export const postReplaceRouteHandler: RouteHandler<typeof postReplaceRoute> = async (c) => {
  throw new Error('Not implemented')
}
