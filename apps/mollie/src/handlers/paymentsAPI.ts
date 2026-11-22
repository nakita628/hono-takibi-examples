import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2PaymentsPaymentIdRoute,
  getV2PaymentsPaymentIdRoute,
  getV2PaymentsRoute,
  patchV2PaymentsPaymentIdRoute,
  postV2PaymentsPaymentIdReleaseAuthorizationRoute,
  postV2PaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsAPIHandler = app
  .openapi(postV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsPaymentIdReleaseAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
