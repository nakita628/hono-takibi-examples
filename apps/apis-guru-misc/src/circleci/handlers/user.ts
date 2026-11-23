import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserHerokuKeyRoute } from '../routes'

export const postUserHerokuKeyRouteHandler: RouteHandler<typeof postUserHerokuKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
