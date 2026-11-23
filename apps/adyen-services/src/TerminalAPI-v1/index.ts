import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAbortRoute,
  postAdminRoute,
  postBalanceinquiryRoute,
  postCardacquisitionRoute,
  postDiagnosisRoute,
  postDisplayRoute,
  postEnableserviceRoute,
  postGettotalsRoute,
  postInputRoute,
  postLoginRoute,
  postLogoutRoute,
  postPaymentRoute,
  postPrintRoute,
  postReconciliationRoute,
  postReversalRoute,
  postStoredvalueRoute,
  postTransactionstatusRoute,
} from './routes'
import {
  postAbortRouteHandler,
  postAdminRouteHandler,
  postBalanceinquiryRouteHandler,
  postCardacquisitionRouteHandler,
  postDiagnosisRouteHandler,
  postDisplayRouteHandler,
  postEnableserviceRouteHandler,
  postGettotalsRouteHandler,
  postInputRouteHandler,
  postLoginRouteHandler,
  postLogoutRouteHandler,
  postPaymentRouteHandler,
  postPrintRouteHandler,
  postReconciliationRouteHandler,
  postReversalRouteHandler,
  postStoredvalueRouteHandler,
  postTransactionstatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(postLogoutRoute, postLogoutRouteHandler)
  .openapi(postEnableserviceRoute, postEnableserviceRouteHandler)
  .openapi(postAdminRoute, postAdminRouteHandler)
  .openapi(postPaymentRoute, postPaymentRouteHandler)
  .openapi(postCardacquisitionRoute, postCardacquisitionRouteHandler)
  .openapi(postStoredvalueRoute, postStoredvalueRouteHandler)
  .openapi(postReversalRoute, postReversalRouteHandler)
  .openapi(postReconciliationRoute, postReconciliationRouteHandler)
  .openapi(postGettotalsRoute, postGettotalsRouteHandler)
  .openapi(postBalanceinquiryRoute, postBalanceinquiryRouteHandler)
  .openapi(postTransactionstatusRoute, postTransactionstatusRouteHandler)
  .openapi(postAbortRoute, postAbortRouteHandler)
  .openapi(postDiagnosisRoute, postDiagnosisRouteHandler)
  .openapi(postDisplayRoute, postDisplayRouteHandler)
  .openapi(postInputRoute, postInputRouteHandler)
  .openapi(postPrintRoute, postPrintRouteHandler)

export default app
