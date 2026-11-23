import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailOtpAuthProvidersIdRoute, getEmailOtpAuthProvidersRoute } from '../routes'

export const getEmailOtpAuthProvidersRouteHandler: RouteHandler<
  typeof getEmailOtpAuthProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailOtpAuthProvidersIdRouteHandler: RouteHandler<
  typeof getEmailOtpAuthProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
