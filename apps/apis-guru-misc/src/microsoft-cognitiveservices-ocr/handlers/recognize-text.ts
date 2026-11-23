import type { RouteHandler } from '@hono/zod-openapi'
import type { postRecognizeTextRoute } from '../routes'

export const postRecognizeTextRouteHandler: RouteHandler<typeof postRecognizeTextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
