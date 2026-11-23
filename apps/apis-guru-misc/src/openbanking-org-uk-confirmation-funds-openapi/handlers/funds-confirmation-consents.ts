import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFundsConfirmationConsentsConsentIdRoute,
  getFundsConfirmationConsentsConsentIdRoute,
  postFundsConfirmationConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fundsConfirmationConsentsHandler = app
  .openapi(postFundsConfirmationConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFundsConfirmationConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFundsConfirmationConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
