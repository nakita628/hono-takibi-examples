import type { RouteHandler } from '@hono/zod-openapi'
import type { getIsochroneRoute } from '../routes'

export const getIsochroneRouteHandler: RouteHandler<typeof getIsochroneRoute> = async (c) => {
  throw new Error('Not implemented')
}
