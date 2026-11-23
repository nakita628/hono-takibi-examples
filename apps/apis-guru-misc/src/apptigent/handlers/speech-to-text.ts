import type { RouteHandler } from '@hono/zod-openapi'
import type { postSpeechToTextRoute } from '../routes'

export const postSpeechToTextRouteHandler: RouteHandler<typeof postSpeechToTextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
