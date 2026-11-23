import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentsV1AuthorizationsAuthorizationTokenRoute,
  getPaymentsV1SessionsSessionIdRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute,
  postPaymentsV1SessionsRoute,
  postPaymentsV1SessionsSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(deletePaymentsV1AuthorizationsAuthorizationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsV1SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsV1SessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsV1SessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
