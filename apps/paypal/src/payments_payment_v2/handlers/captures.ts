import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2PaymentsCapturesCaptureIdRoute,
  postV2PaymentsCapturesCaptureIdRefundRoute,
} from '../routes'

const app = new OpenAPIHono()

export const capturesHandler = app
  .openapi(getV2PaymentsCapturesCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsCapturesCaptureIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
