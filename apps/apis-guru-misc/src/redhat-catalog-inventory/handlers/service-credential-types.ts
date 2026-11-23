import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceCredentialTypesIdRoute, getServiceCredentialTypesRoute } from '../routes'

export const getServiceCredentialTypesRouteHandler: RouteHandler<
  typeof getServiceCredentialTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceCredentialTypesIdRouteHandler: RouteHandler<
  typeof getServiceCredentialTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
