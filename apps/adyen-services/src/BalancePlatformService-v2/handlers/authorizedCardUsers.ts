import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizedCardUsersHandler = app
  .openapi(getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
