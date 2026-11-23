import type { RouteHandler } from '@hono/zod-openapi'
import type { getCIdShowJsonRoute, getCSlugIdJsonRoute } from '../routes'

export const getCSlugIdJsonRouteHandler: RouteHandler<typeof getCSlugIdJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCIdShowJsonRouteHandler: RouteHandler<typeof getCIdShowJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
