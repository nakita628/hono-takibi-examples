import type { RouteHandler } from '@hono/zod-openapi'
import type { postSamplingTargetsRoute } from '../routes'

export const postSamplingTargetsRouteHandler: RouteHandler<
  typeof postSamplingTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
