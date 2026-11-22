import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute,
  getEmployerEmployerIdThirdPartyTransactionsRoute,
  getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thirdPartyTransmissionHandler = app
  .openapi(deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
