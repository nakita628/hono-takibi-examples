import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFundsConfirmationConsentsConsentIdRoute,
  getFundsConfirmationConsentsConsentIdRoute,
  postFundsConfirmationConsentsRoute,
  postFundsConfirmationsRoute,
} from './routes'
import {
  deleteFundsConfirmationConsentsConsentIdRouteHandler,
  getFundsConfirmationConsentsConsentIdRouteHandler,
  postFundsConfirmationConsentsRouteHandler,
  postFundsConfirmationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postFundsConfirmationConsentsRoute, postFundsConfirmationConsentsRouteHandler)
  .openapi(
    deleteFundsConfirmationConsentsConsentIdRoute,
    deleteFundsConfirmationConsentsConsentIdRouteHandler,
  )
  .openapi(
    getFundsConfirmationConsentsConsentIdRoute,
    getFundsConfirmationConsentsConsentIdRouteHandler,
  )
  .openapi(postFundsConfirmationsRoute, postFundsConfirmationsRouteHandler)

export default app
