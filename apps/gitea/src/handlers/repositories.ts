import type { RouteHandler } from '@hono/zod-openapi'
import type { getRepositoriesIdRoute } from '../routes'

export const getRepositoriesIdRouteHandler: RouteHandler<typeof getRepositoriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
