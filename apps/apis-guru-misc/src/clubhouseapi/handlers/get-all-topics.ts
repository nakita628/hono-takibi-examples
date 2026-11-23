import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetAllTopicsRoute } from '../routes'

export const getGetAllTopicsRouteHandler: RouteHandler<typeof getGetAllTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}
