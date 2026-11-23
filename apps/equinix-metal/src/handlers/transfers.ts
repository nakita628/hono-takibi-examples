import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteTransfersIdRoute, getTransfersIdRoute, putTransfersIdRoute } from '../routes'

export const deleteTransfersIdRouteHandler: RouteHandler<typeof deleteTransfersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTransfersIdRouteHandler: RouteHandler<typeof getTransfersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTransfersIdRouteHandler: RouteHandler<typeof putTransfersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
