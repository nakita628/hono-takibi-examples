import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlaysRoute } from '../routes'

export const getPlaysRouteHandler: RouteHandler<typeof getPlaysRoute> = async (c) => {
  throw new Error('Not implemented')
}
