import type { RouteHandler } from '@hono/zod-openapi'
import type { postApiKeysListRoute } from '../routes'

export const postApiKeysListRouteHandler: RouteHandler<typeof postApiKeysListRoute> = async (c) => {
  throw new Error('Not implemented')
}
