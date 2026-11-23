import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertWeightRoute } from '../routes'

export const postConvertWeightRouteHandler: RouteHandler<typeof postConvertWeightRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
