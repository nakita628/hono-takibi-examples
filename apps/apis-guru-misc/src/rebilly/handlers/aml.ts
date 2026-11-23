import type { RouteHandler } from '@hono/zod-openapi'
import type { getAmlRoute } from '../routes'

export const getAmlRouteHandler: RouteHandler<typeof getAmlRoute> = async (c) => {
  throw new Error('Not implemented')
}
