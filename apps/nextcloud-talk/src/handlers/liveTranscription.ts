import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute,
  getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesRoute,
  getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesRoute,
  postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageRoute,
  postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveTranscriptionHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
