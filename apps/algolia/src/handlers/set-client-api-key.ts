import type { RouteHandler } from '@hono/zod-openapi'
import type { getSetClientApiKeyRoute } from '../routes'

export const getSetClientApiKeyRouteHandler: RouteHandler<typeof getSetClientApiKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
