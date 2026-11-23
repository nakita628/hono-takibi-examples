import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceCredentialsIdRoute, getServiceCredentialsRoute } from '../routes'

export const getServiceCredentialsRouteHandler: RouteHandler<
  typeof getServiceCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceCredentialsIdRouteHandler: RouteHandler<
  typeof getServiceCredentialsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
