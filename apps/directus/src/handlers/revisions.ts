import type { RouteHandler } from '@hono/zod-openapi'
import type { getRevisionsIdRoute, getRevisionsRoute } from '../routes'

export const getRevisionsRouteHandler: RouteHandler<typeof getRevisionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRevisionsIdRouteHandler: RouteHandler<typeof getRevisionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
