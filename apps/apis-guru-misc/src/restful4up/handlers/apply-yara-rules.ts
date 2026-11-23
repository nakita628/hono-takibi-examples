import type { RouteHandler } from '@hono/zod-openapi'
import type { postApplyYaraRulesRoute } from '../routes'

export const postApplyYaraRulesRouteHandler: RouteHandler<typeof postApplyYaraRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
