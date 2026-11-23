import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteIdRoute, getIdRoute, putIdRoute } from '../routes'

export const deleteIdRouteHandler: RouteHandler<typeof deleteIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdRouteHandler: RouteHandler<typeof getIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIdRouteHandler: RouteHandler<typeof putIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
