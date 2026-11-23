import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListPlatformBranchesRoute,
  postActionListPlatformBranchesRoute,
} from '../routes'

export const getActionListPlatformBranchesRouteHandler: RouteHandler<
  typeof getActionListPlatformBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPlatformBranchesRouteHandler: RouteHandler<
  typeof postActionListPlatformBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
