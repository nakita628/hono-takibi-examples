import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpeechToTextProvidersRoute, getSpeechToTextTranscriptionRoute } from '../routes'

export const getSpeechToTextProvidersRouteHandler: RouteHandler<
  typeof getSpeechToTextProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpeechToTextTranscriptionRouteHandler: RouteHandler<
  typeof getSpeechToTextTranscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
