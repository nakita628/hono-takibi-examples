import type { RouteHandler } from '@hono/zod-openapi'
import type { getRulesRoute } from '../routes'

export const getRulesRouteHandler: RouteHandler<typeof getRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}
