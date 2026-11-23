import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIpsIdRoute,
  getIpsRoute,
  patchIpsIdRoute,
  postIpsRoute,
  putIpsIdRoute,
} from '../routes'

export const getIpsRouteHandler: RouteHandler<typeof getIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpsRouteHandler: RouteHandler<typeof postIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpsIdRouteHandler: RouteHandler<typeof getIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpsIdRouteHandler: RouteHandler<typeof patchIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpsIdRouteHandler: RouteHandler<typeof putIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
