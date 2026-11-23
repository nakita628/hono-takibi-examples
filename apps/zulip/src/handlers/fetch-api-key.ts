import type { RouteHandler } from '@hono/zod-openapi'
import type { postFetchApiKeyRoute } from '../routes'

export const postFetchApiKeyRouteHandler: RouteHandler<typeof postFetchApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
