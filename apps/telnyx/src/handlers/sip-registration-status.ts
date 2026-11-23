import type { RouteHandler } from '@hono/zod-openapi'
import type { getSipRegistrationStatusRoute } from '../routes'

export const getSipRegistrationStatusRouteHandler: RouteHandler<
  typeof getSipRegistrationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
