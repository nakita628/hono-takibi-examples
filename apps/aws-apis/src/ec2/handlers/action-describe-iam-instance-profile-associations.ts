import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeIamInstanceProfileAssociationsRoute,
  postActionDescribeIamInstanceProfileAssociationsRoute,
} from '../routes'

export const getActionDescribeIamInstanceProfileAssociationsRouteHandler: RouteHandler<
  typeof getActionDescribeIamInstanceProfileAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIamInstanceProfileAssociationsRouteHandler: RouteHandler<
  typeof postActionDescribeIamInstanceProfileAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
