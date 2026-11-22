import { OpenAPIHono } from '@hono/zod-openapi'
import {
  post20100401AccountsAccountSidCallsCallSidTranscriptionsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401CallTranscriptionHandler = app
  .openapi(post20100401AccountsAccountSidCallsCallSidTranscriptionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
