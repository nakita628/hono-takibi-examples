import type { RouteHandler } from '@hono/zod-openapi'
import type { getVerificationsRoute, getVerificationsVerificationIdRoute } from '../routes'

export const getVerificationsRouteHandler: RouteHandler<typeof getVerificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVerificationsVerificationIdRouteHandler: RouteHandler<
  typeof getVerificationsVerificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
