import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreatorsIdRoute, getCreatorsRoute } from '../routes'

export const getCreatorsRouteHandler: RouteHandler<typeof getCreatorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCreatorsIdRouteHandler: RouteHandler<typeof getCreatorsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
