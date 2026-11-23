import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrimaRoute } from '../routes'

export const getTrimaRouteHandler: RouteHandler<typeof getTrimaRoute> = async (c) => {
  throw new Error('Not implemented')
}
