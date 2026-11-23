import type { RouteHandler } from '@hono/zod-openapi'
import type { getInfoEntryRoute, getInfoRoute } from '../routes'

export const getInfoRouteHandler: RouteHandler<typeof getInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoEntryRouteHandler: RouteHandler<typeof getInfoEntryRoute> = async (c) => {
  throw new Error('Not implemented')
}
