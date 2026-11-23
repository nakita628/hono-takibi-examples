import type { RouteHandler } from '@hono/zod-openapi'
import type { postStreamsRoute } from '../routes'

export const postStreamsRouteHandler: RouteHandler<typeof postStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}
