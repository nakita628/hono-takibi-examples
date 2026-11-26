import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAudioSpeechRoute,
  postAudioTranscriptionsRoute,
  postAudioTranslationsRoute,
  postAudioVoiceConsentsRoute,
  getAudioVoiceConsentsRoute,
  getAudioVoiceConsentsConsentIdRoute,
  postAudioVoiceConsentsConsentIdRoute,
  deleteAudioVoiceConsentsConsentIdRoute,
  postAudioVoicesRoute,
  deleteAudioVoicesVoiceIdRoute,
} from '../routes'

export const postAudioSpeechRouteHandler: RouteHandler<typeof postAudioSpeechRoute> = async (c) => {
  throw new Error('Not implemented')
}

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

export const postAudioVoiceConsentsRouteHandler: RouteHandler<
  typeof postAudioVoiceConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudioVoiceConsentsRouteHandler: RouteHandler<
  typeof getAudioVoiceConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudioVoiceConsentsConsentIdRouteHandler: RouteHandler<
  typeof getAudioVoiceConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAudioVoiceConsentsConsentIdRouteHandler: RouteHandler<
  typeof postAudioVoiceConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAudioVoiceConsentsConsentIdRouteHandler: RouteHandler<
  typeof deleteAudioVoiceConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAudioVoicesRouteHandler: RouteHandler<typeof postAudioVoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAudioVoicesVoiceIdRouteHandler: RouteHandler<
  typeof deleteAudioVoicesVoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
