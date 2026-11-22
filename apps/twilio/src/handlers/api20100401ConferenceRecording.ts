import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute,
  post20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401ConferenceRecordingHandler = app
  .openapi(get20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
