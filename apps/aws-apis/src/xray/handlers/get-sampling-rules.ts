import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSamplingRulesRoute } from '../routes'

export const postGetSamplingRulesRouteHandler: RouteHandler<
  typeof postGetSamplingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
