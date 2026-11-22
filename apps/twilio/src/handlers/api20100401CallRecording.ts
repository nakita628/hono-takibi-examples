import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute,
  get20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute,
  get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401CallRecordingHandler = app
  .openapi(post20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidCallsCallSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
