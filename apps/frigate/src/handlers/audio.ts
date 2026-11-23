import type { RouteHandler } from '@hono/zod-openapi'
import type { putAudioTranscribeRoute } from '../routes'

export const putAudioTranscribeRouteHandler: RouteHandler<typeof putAudioTranscribeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
