import type { RouteHandler } from '@hono/zod-openapi'
import type { getRepositoriesRoute, postRepositoriesRoute } from '../routes'

export const getRepositoriesRouteHandler: RouteHandler<typeof getRepositoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesRouteHandler: RouteHandler<typeof postRepositoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
