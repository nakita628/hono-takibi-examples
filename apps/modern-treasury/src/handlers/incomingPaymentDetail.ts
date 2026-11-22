import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiIncomingPaymentDetailsIdRoute,
  getApiIncomingPaymentDetailsRoute,
  patchApiIncomingPaymentDetailsIdRoute,
  postApiSimulationsIncomingPaymentDetailsCreateAsyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incomingPaymentDetailHandler = app
  .openapi(getApiIncomingPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIncomingPaymentDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIncomingPaymentDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSimulationsIncomingPaymentDetailsCreateAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
