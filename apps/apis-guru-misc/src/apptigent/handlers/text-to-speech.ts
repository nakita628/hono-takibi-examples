import type { RouteHandler } from '@hono/zod-openapi'
import type { postTextToSpeechRoute } from '../routes'

export const postTextToSpeechRouteHandler: RouteHandler<typeof postTextToSpeechRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
