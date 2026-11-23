import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIdealProfileAuthenticateRoute,
  postIdealProfileAuthLinkRoute,
  postIdealProfileRegisterRoute,
  postPaymentsCancelRoute,
  postPaymentsConfirmRoute,
  postPaymentsDetailsRoute,
} from './routes'
import {
  postIdealProfileAuthenticateRouteHandler,
  postIdealProfileAuthLinkRouteHandler,
  postIdealProfileRegisterRouteHandler,
  postPaymentsCancelRouteHandler,
  postPaymentsConfirmRouteHandler,
  postPaymentsDetailsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postIdealProfileAuthLinkRoute, postIdealProfileAuthLinkRouteHandler)
  .openapi(postIdealProfileAuthenticateRoute, postIdealProfileAuthenticateRouteHandler)
  .openapi(postIdealProfileRegisterRoute, postIdealProfileRegisterRouteHandler)
  .openapi(postPaymentsCancelRoute, postPaymentsCancelRouteHandler)
  .openapi(postPaymentsConfirmRoute, postPaymentsConfirmRouteHandler)
  .openapi(postPaymentsDetailsRoute, postPaymentsDetailsRouteHandler)

export default app
