import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionApplyEnvironmentManagedActionRoute,
  postActionApplyEnvironmentManagedActionRoute,
} from '../routes'

export const getActionApplyEnvironmentManagedActionRouteHandler: RouteHandler<
  typeof getActionApplyEnvironmentManagedActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionApplyEnvironmentManagedActionRouteHandler: RouteHandler<
  typeof postActionApplyEnvironmentManagedActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
