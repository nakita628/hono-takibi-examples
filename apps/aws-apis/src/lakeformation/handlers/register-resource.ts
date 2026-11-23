import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegisterResourceRoute } from '../routes'

export const postRegisterResourceRouteHandler: RouteHandler<
  typeof postRegisterResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
