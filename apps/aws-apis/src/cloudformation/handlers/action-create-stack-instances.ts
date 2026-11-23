import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateStackInstancesRoute,
  postActionCreateStackInstancesRoute,
} from '../routes'

export const getActionCreateStackInstancesRouteHandler: RouteHandler<
  typeof getActionCreateStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateStackInstancesRouteHandler: RouteHandler<
  typeof postActionCreateStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
