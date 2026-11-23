import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAliasesAliasNameRoute,
  getAliasesAliasNameRoute,
  getAliasesRoute,
  putAliasesAliasNameRoute,
} from '../routes'

export const getAliasesRouteHandler: RouteHandler<typeof getAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAliasesAliasNameRouteHandler: RouteHandler<
  typeof putAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAliasesAliasNameRouteHandler: RouteHandler<
  typeof getAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAliasesAliasNameRouteHandler: RouteHandler<
  typeof deleteAliasesAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
