import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
  get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute,
  post20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
  post20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401ParticipantHandler = app
  .openapi(
    get20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    post20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(post20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
