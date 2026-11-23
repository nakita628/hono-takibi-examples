import type { RouteHandler } from '@hono/zod-openapi'
import type { postOriginKeysRoute } from '../routes'

export const postOriginKeysRouteHandler: RouteHandler<typeof postOriginKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}
