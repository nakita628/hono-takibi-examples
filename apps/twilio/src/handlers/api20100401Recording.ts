import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidRecordingsSidJsonRoute,
  get20100401AccountsAccountSidRecordingsJsonRoute,
  get20100401AccountsAccountSidRecordingsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401RecordingHandler = app
  .openapi(get20100401AccountsAccountSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
