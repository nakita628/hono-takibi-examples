import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateConnectorRegistrationRoute } from '../routes'

export const postUpdateConnectorRegistrationRouteHandler: RouteHandler<
  typeof postUpdateConnectorRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
