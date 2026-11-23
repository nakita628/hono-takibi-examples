import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProxyAnyPathRoute,
  getProxyAnyPathRoute,
  patchProxyAnyPathRoute,
  postProxyAnyPathRoute,
  putProxyAnyPathRoute,
} from '../routes'

export const getProxyAnyPathRouteHandler: RouteHandler<typeof getProxyAnyPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProxyAnyPathRouteHandler: RouteHandler<typeof postProxyAnyPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putProxyAnyPathRouteHandler: RouteHandler<typeof putProxyAnyPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProxyAnyPathRouteHandler: RouteHandler<typeof patchProxyAnyPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteProxyAnyPathRouteHandler: RouteHandler<typeof deleteProxyAnyPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
