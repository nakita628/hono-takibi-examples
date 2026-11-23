import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateSamplingRuleRoute } from '../routes'

export const postUpdateSamplingRuleRouteHandler: RouteHandler<
  typeof postUpdateSamplingRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
