import type { RouteHandler } from '@hono/zod-openapi'
import type { postTraceGraphRoute } from '../routes'

export const postTraceGraphRouteHandler: RouteHandler<typeof postTraceGraphRoute> = async (c) => {
  throw new Error('Not implemented')
}
