import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentsV1AuthorizationsAuthorizationTokenRoute,
  getPaymentsV1SessionsSessionIdRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute,
  postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute,
  postPaymentsV1SessionsRoute,
  postPaymentsV1SessionsSessionIdRoute,
} from './routes'
import {
  deletePaymentsV1AuthorizationsAuthorizationTokenRouteHandler,
  getPaymentsV1SessionsSessionIdRouteHandler,
  postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRouteHandler,
  postPaymentsV1AuthorizationsAuthorizationTokenOrderRouteHandler,
  postPaymentsV1SessionsRouteHandler,
  postPaymentsV1SessionsSessionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deletePaymentsV1AuthorizationsAuthorizationTokenRoute,
    deletePaymentsV1AuthorizationsAuthorizationTokenRouteHandler,
  )
  .openapi(
    postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute,
    postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRouteHandler,
  )
  .openapi(
    postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute,
    postPaymentsV1AuthorizationsAuthorizationTokenOrderRouteHandler,
  )
  .openapi(postPaymentsV1SessionsRoute, postPaymentsV1SessionsRouteHandler)
  .openapi(getPaymentsV1SessionsSessionIdRoute, getPaymentsV1SessionsSessionIdRouteHandler)
  .openapi(postPaymentsV1SessionsSessionIdRoute, postPaymentsV1SessionsSessionIdRouteHandler)

export default app
