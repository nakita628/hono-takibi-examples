import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiExpectedPaymentsIdRoute,
  getApiExpectedPaymentsIdRoute,
  getApiExpectedPaymentsRoute,
  patchApiExpectedPaymentsIdRoute,
  postApiExpectedPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expectedPaymentHandler = app
  .openapi(getApiExpectedPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExpectedPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExpectedPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExpectedPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExpectedPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
