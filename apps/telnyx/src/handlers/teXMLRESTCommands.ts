import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
  deleteTexmlAccountsAccountSidQueuesQueueSidRoute,
  deleteTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute,
  deleteTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute,
  getTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute,
  getTexmlAccountsAccountSidCallsCallSidRoute,
  getTexmlAccountsAccountSidCallsRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidRecordingsJsonRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidRecordingsRoute,
  getTexmlAccountsAccountSidConferencesConferenceSidRoute,
  getTexmlAccountsAccountSidConferencesRoute,
  getTexmlAccountsAccountSidQueuesQueueSidRoute,
  getTexmlAccountsAccountSidQueuesRoute,
  getTexmlAccountsAccountSidRecordingsJsonRoute,
  getTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute,
  getTexmlAccountsAccountSidTranscriptionsJsonRoute,
  getTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidRecordingsRecordingSidJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidRoute,
  postTexmlAccountsAccountSidCallsCallSidSiprecJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidSiprecSiprecSidJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidStreamsJsonRoute,
  postTexmlAccountsAccountSidCallsCallSidStreamsStreamingSidJsonRoute,
  postTexmlAccountsAccountSidCallsRoute,
  postTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
  postTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute,
  postTexmlAccountsAccountSidConferencesConferenceSidRoute,
  postTexmlAccountsAccountSidQueuesQueueSidRoute,
  postTexmlAccountsAccountSidQueuesRoute,
  postTexmlAiCallsConnectionIdRoute,
  postTexmlCallsConnectionIdRoute,
  postTexmlSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teXMLRESTCommandsHandler = app
  .openapi(getTexmlAccountsAccountSidCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidCallsCallSidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsCallSidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsCallSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsCallSidRecordingsRecordingSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsCallSidSiprecJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsCallSidSiprecSiprecSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsCallSidStreamsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidCallsCallSidStreamsStreamingSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidConferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidConferencesConferenceSidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidConferencesConferenceSidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidConferencesConferenceSidParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postTexmlAccountsAccountSidConferencesConferenceSidParticipantsCallSidOrParticipantLabelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTexmlAccountsAccountSidConferencesConferenceSidRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidConferencesConferenceSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTexmlAccountsAccountSidQueuesQueueSidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidQueuesQueueSidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAccountsAccountSidQueuesQueueSidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidRecordingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidRecordingsRecordingSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidTranscriptionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlAccountsAccountSidTranscriptionsRecordingTranscriptionSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlAiCallsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlCallsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
