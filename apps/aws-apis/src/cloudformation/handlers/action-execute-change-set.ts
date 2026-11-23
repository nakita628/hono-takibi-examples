import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionExecuteChangeSetRoute, postActionExecuteChangeSetRoute } from '../routes'

export const getActionExecuteChangeSetRouteHandler: RouteHandler<
  typeof getActionExecuteChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionExecuteChangeSetRouteHandler: RouteHandler<
  typeof postActionExecuteChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
