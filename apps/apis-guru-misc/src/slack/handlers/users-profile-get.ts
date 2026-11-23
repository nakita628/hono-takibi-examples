import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersProfileGetRoute } from '../routes'

export const getUsersProfileGetRouteHandler: RouteHandler<typeof getUsersProfileGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
