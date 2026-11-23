import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseUpdatesRoute } from '../routes'

export const getCaseUpdatesRouteHandler: RouteHandler<typeof getCaseUpdatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
