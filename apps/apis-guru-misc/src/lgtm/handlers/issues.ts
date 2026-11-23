import type { RouteHandler } from '@hono/zod-openapi'
import type { getIssuesProjectIdAlertKeyRoute } from '../routes'

export const getIssuesProjectIdAlertKeyRouteHandler: RouteHandler<
  typeof getIssuesProjectIdAlertKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
