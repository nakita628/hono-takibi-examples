import type { RouteHandler } from '@hono/zod-openapi'
import type { getCredentialsProgrammaticEnvironmentIdRoute } from '../routes'

export const getCredentialsProgrammaticEnvironmentIdRouteHandler: RouteHandler<
  typeof getCredentialsProgrammaticEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
