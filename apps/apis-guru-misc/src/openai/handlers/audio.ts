import type { RouteHandler } from '@hono/zod-openapi'
import type { postAudioTranscriptionsRoute, postAudioTranslationsRoute } from '../routes'

export const postAudioTranscriptionsRouteHandler: RouteHandler<
  typeof postAudioTranscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAudioTranslationsRouteHandler: RouteHandler<
  typeof postAudioTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
