import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsStreamsRoute } from '../routes'

export const getTagsStreamsRouteHandler: RouteHandler<typeof getTagsStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}
