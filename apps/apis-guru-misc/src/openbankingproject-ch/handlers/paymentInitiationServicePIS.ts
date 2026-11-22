import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PaymentServicePaymentProductPaymentIdRoute,
  getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute,
  getV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute,
  getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
  getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute,
  getV1PaymentServicePaymentProductPaymentIdRoute,
  getV1PaymentServicePaymentProductPaymentIdStatusRoute,
  postV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute,
  postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute,
  postV1PaymentServicePaymentProductRoute,
  putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute,
  putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentInitiationServicePISHandler = app
  .openapi(postV1PaymentServicePaymentProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentServicePaymentProductPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1PaymentServicePaymentProductPaymentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
