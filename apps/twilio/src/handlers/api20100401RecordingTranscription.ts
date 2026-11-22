import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute,
  get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonRoute,
  get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401RecordingTranscriptionHandler = app
  .openapi(get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    delete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(get20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
