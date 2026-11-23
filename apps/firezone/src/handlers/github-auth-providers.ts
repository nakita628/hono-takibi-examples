import type { RouteHandler } from '@hono/zod-openapi'
import type { getGithubAuthProvidersIdRoute, getGithubAuthProvidersRoute } from '../routes'

export const getGithubAuthProvidersIdRouteHandler: RouteHandler<
  typeof getGithubAuthProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGithubAuthProvidersRouteHandler: RouteHandler<
  typeof getGithubAuthProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
