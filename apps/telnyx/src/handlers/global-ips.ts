import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGlobalIpsIdRoute,
  getGlobalIpsIdRoute,
  getGlobalIpsRoute,
  postGlobalIpsRoute,
} from '../routes'

export const getGlobalIpsRouteHandler: RouteHandler<typeof getGlobalIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGlobalIpsRouteHandler: RouteHandler<typeof postGlobalIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGlobalIpsIdRouteHandler: RouteHandler<typeof deleteGlobalIpsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGlobalIpsIdRouteHandler: RouteHandler<typeof getGlobalIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
