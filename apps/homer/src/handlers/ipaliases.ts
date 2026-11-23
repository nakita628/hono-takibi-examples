import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIpaliasesAliasIdRoute,
  getIpaliasesRoute,
  postIpaliasesRoute,
  putIpaliasesAliasIdRoute,
} from '../routes'

export const getIpaliasesRouteHandler: RouteHandler<typeof getIpaliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpaliasesRouteHandler: RouteHandler<typeof postIpaliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpaliasesAliasIdRouteHandler: RouteHandler<
  typeof putIpaliasesAliasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpaliasesAliasIdRouteHandler: RouteHandler<
  typeof deleteIpaliasesAliasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
