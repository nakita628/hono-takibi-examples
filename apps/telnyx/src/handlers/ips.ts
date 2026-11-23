import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIpsIdRoute,
  getIpsIdRoute,
  getIpsRoute,
  patchIpsIdRoute,
  postIpsRoute,
} from '../routes'

export const getIpsRouteHandler: RouteHandler<typeof getIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsRouteHandler: RouteHandler<typeof postIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpsIdRouteHandler: RouteHandler<typeof deleteIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpsIdRouteHandler: RouteHandler<typeof getIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpsIdRouteHandler: RouteHandler<typeof patchIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
