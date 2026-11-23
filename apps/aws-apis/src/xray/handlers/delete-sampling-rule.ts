import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteSamplingRuleRoute } from '../routes'

export const postDeleteSamplingRuleRouteHandler: RouteHandler<
  typeof postDeleteSamplingRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
