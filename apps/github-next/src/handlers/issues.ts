import type { RouteHandler } from '@hono/zod-openapi'
import type { getIssuesRoute } from '../routes'

export const getIssuesRouteHandler: RouteHandler<typeof getIssuesRoute> = async (c) => {
  throw new Error('Not implemented')
}
