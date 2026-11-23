import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomesticScheduledPaymentConsentsConsentIdRoute,
  postDomesticScheduledPaymentConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domesticScheduledPaymentConsentsHandler = app
  .openapi(postDomesticScheduledPaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomesticScheduledPaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
