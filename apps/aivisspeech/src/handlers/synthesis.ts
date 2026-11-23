import type { RouteHandler } from '@hono/zod-openapi'
import type { postSynthesisRoute } from '../routes'

export const postSynthesisRouteHandler: RouteHandler<typeof postSynthesisRoute> = async (c) => {
  throw new Error('Not implemented')
}
