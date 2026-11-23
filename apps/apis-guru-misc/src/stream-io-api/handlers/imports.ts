import type { RouteHandler } from '@hono/zod-openapi'
import type { getImportsIdRoute, getImportsRoute, postImportsRoute } from '../routes'

export const getImportsRouteHandler: RouteHandler<typeof getImportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postImportsRouteHandler: RouteHandler<typeof postImportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImportsIdRouteHandler: RouteHandler<typeof getImportsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
