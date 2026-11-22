import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute,
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonRoute,
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AddOnResultHandler = app
  .openapi(get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
