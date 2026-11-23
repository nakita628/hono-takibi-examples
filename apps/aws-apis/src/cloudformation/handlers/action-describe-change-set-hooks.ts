import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeChangeSetHooksRoute,
  postActionDescribeChangeSetHooksRoute,
} from '../routes'

export const getActionDescribeChangeSetHooksRouteHandler: RouteHandler<
  typeof getActionDescribeChangeSetHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeChangeSetHooksRouteHandler: RouteHandler<
  typeof postActionDescribeChangeSetHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
