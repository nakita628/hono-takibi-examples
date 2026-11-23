import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAliasesRoute,
  getAliasesAllRoute,
  getAliasesRoute,
  postAliasesRoute,
  putAliasesRoute,
} from '../routes'

export const deleteAliasesRouteHandler: RouteHandler<typeof deleteAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAliasesRouteHandler: RouteHandler<typeof getAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAliasesRouteHandler: RouteHandler<typeof postAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAliasesRouteHandler: RouteHandler<typeof putAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAliasesAllRouteHandler: RouteHandler<typeof getAliasesAllRoute> = async (c) => {
  throw new Error('Not implemented')
}
