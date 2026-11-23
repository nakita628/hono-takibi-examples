import type { RouteHandler } from '@hono/zod-openapi'
import type { postRequestApiKeyRoute } from '../routes'

export const postRequestApiKeyRouteHandler: RouteHandler<typeof postRequestApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
