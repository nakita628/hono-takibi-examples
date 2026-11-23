import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecordingsIdRoute, getRecordingsRoute } from '../routes'

export const getRecordingsRouteHandler: RouteHandler<typeof getRecordingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordingsIdRouteHandler: RouteHandler<typeof getRecordingsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
