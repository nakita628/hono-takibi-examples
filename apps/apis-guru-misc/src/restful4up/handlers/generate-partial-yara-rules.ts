import type { RouteHandler } from '@hono/zod-openapi'
import type { postGeneratePartialYaraRulesRoute } from '../routes'

export const postGeneratePartialYaraRulesRouteHandler: RouteHandler<
  typeof postGeneratePartialYaraRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
