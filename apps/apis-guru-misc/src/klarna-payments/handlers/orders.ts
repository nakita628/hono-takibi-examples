import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentsV1AuthorizationsAuthorizationTokenRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(deletePaymentsV1AuthorizationsAuthorizationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
