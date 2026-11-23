import type { RouteHandler } from '@hono/zod-openapi'
import type { postDevFetchApiKeyRoute } from '../routes'

export const postDevFetchApiKeyRouteHandler: RouteHandler<typeof postDevFetchApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
