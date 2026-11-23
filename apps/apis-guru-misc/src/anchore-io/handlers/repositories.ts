import type { RouteHandler } from '@hono/zod-openapi'
import type { postRepositoriesRoute } from '../routes'

export const postRepositoriesRouteHandler: RouteHandler<typeof postRepositoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
