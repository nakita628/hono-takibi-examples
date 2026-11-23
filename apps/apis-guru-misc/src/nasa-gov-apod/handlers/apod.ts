import type { RouteHandler } from '@hono/zod-openapi'
import type { getApodRoute } from '../routes'

export const getApodRouteHandler: RouteHandler<typeof getApodRoute> = async (c) => {
  throw new Error('Not implemented')
}
