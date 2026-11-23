import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIpsIdRoute,
  getIpsIdAvailableRoute,
  getIpsIdCustomdataRoute,
  getIpsIdRoute,
  patchIpsIdRoute,
} from '../routes'

export const deleteIpsIdRouteHandler: RouteHandler<typeof deleteIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpsIdRouteHandler: RouteHandler<typeof getIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpsIdRouteHandler: RouteHandler<typeof patchIpsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpsIdAvailableRouteHandler: RouteHandler<typeof getIpsIdAvailableRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIpsIdCustomdataRouteHandler: RouteHandler<typeof getIpsIdCustomdataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
