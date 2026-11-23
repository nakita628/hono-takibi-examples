import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAppIdRoute, getAppIdRoute, putAppIdRoute } from '../routes'

export const deleteAppIdRouteHandler: RouteHandler<typeof deleteAppIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppIdRouteHandler: RouteHandler<typeof getAppIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppIdRouteHandler: RouteHandler<typeof putAppIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
