import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancellableSynthesisRoute } from '../routes'

export const postCancellableSynthesisRouteHandler: RouteHandler<
  typeof postCancellableSynthesisRoute
> = async (c) => {
  throw new Error('Not implemented')
}
