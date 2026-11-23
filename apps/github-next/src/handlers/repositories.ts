import type { RouteHandler } from '@hono/zod-openapi'
import type { getRepositoriesRoute } from '../routes'

export const getRepositoriesRouteHandler: RouteHandler<typeof getRepositoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}
