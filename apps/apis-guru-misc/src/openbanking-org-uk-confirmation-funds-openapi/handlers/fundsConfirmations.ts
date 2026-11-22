import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFundsConfirmationConsentsConsentIdRoute,
  getFundsConfirmationConsentsConsentIdRoute,
  postFundsConfirmationConsentsRoute,
  postFundsConfirmationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fundsConfirmationsHandler = app
  .openapi(postFundsConfirmationConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFundsConfirmationConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFundsConfirmationConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFundsConfirmationsRoute, (c) => {
    throw new Error('Not implemented')
  })
