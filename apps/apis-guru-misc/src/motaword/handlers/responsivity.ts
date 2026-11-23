import type { RouteHandler } from '@hono/zod-openapi'
import type { getResponsivityRoute } from '../routes'

export const getResponsivityRouteHandler: RouteHandler<typeof getResponsivityRoute> = async (c) => {
  throw new Error('Not implemented')
}
