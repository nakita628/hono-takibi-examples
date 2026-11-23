import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePathRoute, getPathRoute, postPathRoute, putPathRoute } from '../routes'

export const getPathRouteHandler: RouteHandler<typeof getPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPathRouteHandler: RouteHandler<typeof postPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPathRouteHandler: RouteHandler<typeof putPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePathRouteHandler: RouteHandler<typeof deletePathRoute> = async (c) => {
  throw new Error('Not implemented')
}
