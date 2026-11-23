import type { RouteHandler } from '@hono/zod-openapi'
import type { postMultiSynthesisRoute } from '../routes'

export const postMultiSynthesisRouteHandler: RouteHandler<typeof postMultiSynthesisRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
