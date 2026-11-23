import type { RouteHandler } from '@hono/zod-openapi'
import type { postFrameSynthesisRoute } from '../routes'

export const postFrameSynthesisRouteHandler: RouteHandler<typeof postFrameSynthesisRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
