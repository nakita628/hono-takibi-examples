import type { RouteHandler } from '@hono/zod-openapi'
import type { getGitignoreTemplatesNameRoute, getGitignoreTemplatesRoute } from '../routes'

export const getGitignoreTemplatesRouteHandler: RouteHandler<
  typeof getGitignoreTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGitignoreTemplatesNameRouteHandler: RouteHandler<
  typeof getGitignoreTemplatesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
