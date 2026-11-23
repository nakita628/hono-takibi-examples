import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateStackInstancesRoute,
  postActionUpdateStackInstancesRoute,
} from '../routes'

export const getActionUpdateStackInstancesRouteHandler: RouteHandler<
  typeof getActionUpdateStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateStackInstancesRouteHandler: RouteHandler<
  typeof postActionUpdateStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
