import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPaymentProfileCreateRoute,
  postPaymentProfileGetRoute,
  postPaymentProfileRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentProfileHandler = app
  .openapi(postPaymentProfileCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentProfileGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentProfileRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
