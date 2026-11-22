import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidTranscriptionsSidJsonRoute,
  get20100401AccountsAccountSidTranscriptionsJsonRoute,
  get20100401AccountsAccountSidTranscriptionsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401TranscriptionHandler = app
  .openapi(get20100401AccountsAccountSidTranscriptionsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidTranscriptionsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidTranscriptionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
