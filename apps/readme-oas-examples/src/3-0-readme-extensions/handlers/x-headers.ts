import type { RouteHandler } from '@hono/zod-openapi'
import type { patchXHeadersRoute, postXHeadersRoute } from '../routes'

export const postXHeadersRouteHandler: RouteHandler<typeof postXHeadersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchXHeadersRouteHandler: RouteHandler<typeof patchXHeadersRoute> = async (c) => {
  throw new Error('Not implemented')
}
