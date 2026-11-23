import type { RouteHandler } from '@hono/zod-openapi'
import type { getMacdextRoute } from '../routes'

export const getMacdextRouteHandler: RouteHandler<typeof getMacdextRoute> = async (c) => {
  throw new Error('Not implemented')
}
