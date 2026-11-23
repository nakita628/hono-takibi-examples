import type { RouteHandler } from '@hono/zod-openapi'
import type { putArchiveRuleRoute } from '../routes'

export const putArchiveRuleRouteHandler: RouteHandler<typeof putArchiveRuleRoute> = async (c) => {
  throw new Error('Not implemented')
}
