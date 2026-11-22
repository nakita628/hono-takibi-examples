import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2PaymentsPaymentIdCapturesCaptureIdRoute,
  getV2PaymentsPaymentIdCapturesRoute,
  postV2PaymentsPaymentIdCapturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const capturesAPIHandler = app
  .openapi(postV2PaymentsPaymentIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdCapturesCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
