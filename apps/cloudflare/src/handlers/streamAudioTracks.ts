import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamIdentifierAudioAudioIdentifierRoute,
  getAccountsAccountIdStreamIdentifierAudioRoute,
  patchAccountsAccountIdStreamIdentifierAudioAudioIdentifierRoute,
  postAccountsAccountIdStreamIdentifierAudioCopyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamAudioTracksHandler = app
  .openapi(getAccountsAccountIdStreamIdentifierAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamIdentifierAudioCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStreamIdentifierAudioAudioIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdStreamIdentifierAudioAudioIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
