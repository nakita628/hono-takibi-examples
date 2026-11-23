import type { RouteHandler } from '@hono/zod-openapi'
import type { getWaitForApiKeyRoute } from '../routes'

export const getWaitForApiKeyRouteHandler: RouteHandler<typeof getWaitForApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
