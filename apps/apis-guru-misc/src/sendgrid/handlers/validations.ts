import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidationsEmailRoute } from '../routes'

export const postValidationsEmailRouteHandler: RouteHandler<
  typeof postValidationsEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
