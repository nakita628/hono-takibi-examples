import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBInstanceAutomatedBackupsRoute,
  postActionDescribeDBInstanceAutomatedBackupsRoute,
} from '../routes'

export const getActionDescribeDBInstanceAutomatedBackupsRouteHandler: RouteHandler<
  typeof getActionDescribeDBInstanceAutomatedBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBInstanceAutomatedBackupsRouteHandler: RouteHandler<
  typeof postActionDescribeDBInstanceAutomatedBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
