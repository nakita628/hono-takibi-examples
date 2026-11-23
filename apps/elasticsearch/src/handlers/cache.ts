import type { RouteHandler } from '@hono/zod-openapi'
import type { postCacheClearRoute } from '../routes'

export const postCacheClearRouteHandler: RouteHandler<typeof postCacheClearRoute> = async (c) => {
  throw new Error('Not implemented')
}
