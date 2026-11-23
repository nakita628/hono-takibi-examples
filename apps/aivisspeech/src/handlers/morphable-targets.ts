import type { RouteHandler } from '@hono/zod-openapi'
import type { postMorphableTargetsRoute } from '../routes'

export const postMorphableTargetsRouteHandler: RouteHandler<
  typeof postMorphableTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
