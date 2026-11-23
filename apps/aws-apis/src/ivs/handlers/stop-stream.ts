import type { RouteHandler } from '@hono/zod-openapi'
import type { postStopStreamRoute } from '../routes'

export const postStopStreamRouteHandler: RouteHandler<typeof postStopStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}
