import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentPolicyPaymentPolicyIdRoute,
  getPaymentPolicyGetByPolicyNameRoute,
  getPaymentPolicyPaymentPolicyIdRoute,
  getPaymentPolicyRoute,
  postPaymentPolicyRoute,
  putPaymentPolicyPaymentPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentPolicyHandler = app
  .openapi(getPaymentPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentPolicyGetByPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentPolicyPaymentPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentPolicyPaymentPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentPolicyPaymentPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
