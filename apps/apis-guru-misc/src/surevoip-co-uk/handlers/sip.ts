import type { RouteHandler } from '@hono/zod-openapi'
import type { getSipRoute } from '../routes'

export const getSipRouteHandler: RouteHandler<typeof getSipRoute> = async (c) => {
  throw new Error('Not implemented')
}
