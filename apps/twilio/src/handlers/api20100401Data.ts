import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401DataHandler = app.openapi(
  get20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
