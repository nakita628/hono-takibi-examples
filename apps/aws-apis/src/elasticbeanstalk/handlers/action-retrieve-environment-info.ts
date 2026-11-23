import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRetrieveEnvironmentInfoRoute,
  postActionRetrieveEnvironmentInfoRoute,
} from '../routes'

export const getActionRetrieveEnvironmentInfoRouteHandler: RouteHandler<
  typeof getActionRetrieveEnvironmentInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRetrieveEnvironmentInfoRouteHandler: RouteHandler<
  typeof postActionRetrieveEnvironmentInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
