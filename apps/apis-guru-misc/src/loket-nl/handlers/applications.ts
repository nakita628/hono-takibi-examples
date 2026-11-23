import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApplicationsApplicationIdAuthorizationsRoute,
  getApplicationsApplicationIdLogoRoute,
} from '../routes'

export const getApplicationsApplicationIdAuthorizationsRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdAuthorizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApplicationsApplicationIdLogoRouteHandler: RouteHandler<
  typeof getApplicationsApplicationIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
