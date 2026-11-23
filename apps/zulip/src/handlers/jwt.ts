import type { RouteHandler } from '@hono/zod-openapi'
import type { postJwtFetchApiKeyRoute } from '../routes'

export const postJwtFetchApiKeyRouteHandler: RouteHandler<typeof postJwtFetchApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
