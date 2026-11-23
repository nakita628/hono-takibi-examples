import type { RouteHandler } from '@hono/zod-openapi'
import type { getV4AliasesIdOrAliasRoute, getV4AliasesRoute, postV4SandboxesRoute } from '../routes'

export const postV4SandboxesRouteHandler: RouteHandler<typeof postV4SandboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4AliasesRouteHandler: RouteHandler<typeof getV4AliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4AliasesIdOrAliasRouteHandler: RouteHandler<
  typeof getV4AliasesIdOrAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}
