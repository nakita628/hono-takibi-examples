import type { RouteHandler } from '@hono/zod-openapi'
import type { postOneOfComplexRoute } from '../routes'

export const postOneOfComplexRouteHandler: RouteHandler<typeof postOneOfComplexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
