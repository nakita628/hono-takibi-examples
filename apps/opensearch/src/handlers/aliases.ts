import type { RouteHandler } from '@hono/zod-openapi'
import type { postAliasesNameRoute, postAliasesRoute, putAliasesNameRoute } from '../routes'

export const postAliasesRouteHandler: RouteHandler<typeof postAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAliasesNameRouteHandler: RouteHandler<typeof postAliasesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAliasesNameRouteHandler: RouteHandler<typeof putAliasesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
