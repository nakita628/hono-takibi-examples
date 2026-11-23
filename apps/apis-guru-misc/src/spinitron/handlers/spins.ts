import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpinsIdRoute, getSpinsRoute, postSpinsRoute } from '../routes'

export const getSpinsRouteHandler: RouteHandler<typeof getSpinsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpinsRouteHandler: RouteHandler<typeof postSpinsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpinsIdRouteHandler: RouteHandler<typeof getSpinsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
