import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecordsFieldRoute } from '../routes'

export const getRecordsFieldRouteHandler: RouteHandler<typeof getRecordsFieldRoute> = async (c) => {
  throw new Error('Not implemented')
}
