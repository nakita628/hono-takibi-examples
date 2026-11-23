import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteWantsIdRoute, getWantsRoute, putWantsIdRoute } from '../routes'

export const getWantsRouteHandler: RouteHandler<typeof getWantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWantsIdRouteHandler: RouteHandler<typeof deleteWantsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putWantsIdRouteHandler: RouteHandler<typeof putWantsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
