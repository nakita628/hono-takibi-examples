import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBClusterAutomatedBackupsRoute,
  postActionDescribeDBClusterAutomatedBackupsRoute,
} from '../routes'

export const getActionDescribeDBClusterAutomatedBackupsRouteHandler: RouteHandler<
  typeof getActionDescribeDBClusterAutomatedBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClusterAutomatedBackupsRouteHandler: RouteHandler<
  typeof postActionDescribeDBClusterAutomatedBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
