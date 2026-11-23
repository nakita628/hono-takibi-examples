import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProxyRoute,
  getProxyRoute,
  optionsProxyRoute,
  patchProxyRoute,
  postProxyRoute,
  putProxyRoute,
} from '../routes'

export const deleteProxyRouteHandler: RouteHandler<typeof deleteProxyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProxyRouteHandler: RouteHandler<typeof getProxyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsProxyRouteHandler: RouteHandler<typeof optionsProxyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProxyRouteHandler: RouteHandler<typeof patchProxyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProxyRouteHandler: RouteHandler<typeof postProxyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putProxyRouteHandler: RouteHandler<typeof putProxyRoute> = async (c) => {
  throw new Error('Not implemented')
}
