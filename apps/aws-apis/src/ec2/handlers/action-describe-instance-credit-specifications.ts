import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeInstanceCreditSpecificationsRoute,
  postActionDescribeInstanceCreditSpecificationsRoute,
} from '../routes'

export const getActionDescribeInstanceCreditSpecificationsRouteHandler: RouteHandler<
  typeof getActionDescribeInstanceCreditSpecificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeInstanceCreditSpecificationsRouteHandler: RouteHandler<
  typeof postActionDescribeInstanceCreditSpecificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
