import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateSamplingRuleRoute } from '../routes'

export const postCreateSamplingRuleRouteHandler: RouteHandler<
  typeof postCreateSamplingRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
