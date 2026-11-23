import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimezoneTxtRoute } from '../routes'

export const getTimezoneTxtRouteHandler: RouteHandler<typeof getTimezoneTxtRoute> = async (c) => {
  throw new Error('Not implemented')
}
