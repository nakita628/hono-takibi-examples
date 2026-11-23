import type { RouteHandler } from '@hono/zod-openapi'
import type { postIssueRoute } from '../routes'

export const postIssueRouteHandler: RouteHandler<typeof postIssueRoute> = async (c) => {
  throw new Error('Not implemented')
}
