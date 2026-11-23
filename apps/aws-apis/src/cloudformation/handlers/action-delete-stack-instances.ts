import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteStackInstancesRoute,
  postActionDeleteStackInstancesRoute,
} from '../routes'

export const getActionDeleteStackInstancesRouteHandler: RouteHandler<
  typeof getActionDeleteStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteStackInstancesRouteHandler: RouteHandler<
  typeof postActionDeleteStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
