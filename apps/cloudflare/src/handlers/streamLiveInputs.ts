import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsOutputIdentifierRoute,
  deleteAccountsAccountIdStreamLiveInputsLiveInputIdentifierRoute,
  getAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsRoute,
  getAccountsAccountIdStreamLiveInputsLiveInputIdentifierRoute,
  getAccountsAccountIdStreamLiveInputsRoute,
  postAccountsAccountIdStreamLiveInputsLiveInputIdentifierDisableRoute,
  postAccountsAccountIdStreamLiveInputsLiveInputIdentifierEnableRoute,
  postAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsRoute,
  postAccountsAccountIdStreamLiveInputsLiveInputIdentifierRotateKeysRoute,
  postAccountsAccountIdStreamLiveInputsRoute,
  putAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsOutputIdentifierRoute,
  putAccountsAccountIdStreamLiveInputsLiveInputIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamLiveInputsHandler = app
  .openapi(getAccountsAccountIdStreamLiveInputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamLiveInputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStreamLiveInputsLiveInputIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamLiveInputsLiveInputIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdStreamLiveInputsLiveInputIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamLiveInputsLiveInputIdentifierDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamLiveInputsLiveInputIdentifierEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsOutputIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdStreamLiveInputsLiveInputIdentifierOutputsOutputIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAccountsAccountIdStreamLiveInputsLiveInputIdentifierRotateKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
