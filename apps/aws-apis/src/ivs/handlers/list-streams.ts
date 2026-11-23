import type { RouteHandler } from '@hono/zod-openapi'
import type { postListStreamsRoute } from '../routes'

export const postListStreamsRouteHandler: RouteHandler<typeof postListStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}
