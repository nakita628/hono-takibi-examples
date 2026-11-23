import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAliasesAliasIdRoute,
  getAliasesRoute,
  postAliasesRoute,
  putAliasesAliasIdRoute,
} from '../routes'

export const getAliasesRouteHandler: RouteHandler<typeof getAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAliasesRouteHandler: RouteHandler<typeof postAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAliasesAliasIdRouteHandler: RouteHandler<typeof putAliasesAliasIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAliasesAliasIdRouteHandler: RouteHandler<
  typeof deleteAliasesAliasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
