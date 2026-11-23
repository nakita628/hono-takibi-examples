import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApplicationsAppIdAppIdRoute,
  getApplicationsAppIdAppIdRoute,
  patchApplicationsAppIdAppIdRoute,
} from '../routes'

export const getApplicationsAppIdAppIdRouteHandler: RouteHandler<
  typeof getApplicationsAppIdAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApplicationsAppIdAppIdRouteHandler: RouteHandler<
  typeof patchApplicationsAppIdAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApplicationsAppIdAppIdRouteHandler: RouteHandler<
  typeof deleteApplicationsAppIdAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
