import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaAccountsRoute,
  getV1betaNameRoute,
  getV1betaParentAdSourcesRoute,
  getV1betaParentAdUnitsRoute,
  getV1betaParentAppsRoute,
  postV1betaParentMediationReportGenerateRoute,
  postV1betaParentNetworkReportGenerateRoute,
} from './routes'
import {
  getV1betaAccountsRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentAdSourcesRouteHandler,
  getV1betaParentAdUnitsRouteHandler,
  getV1betaParentAppsRouteHandler,
  postV1betaParentMediationReportGenerateRouteHandler,
  postV1betaParentNetworkReportGenerateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1betaAccountsRoute, getV1betaAccountsRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(getV1betaParentAdSourcesRoute, getV1betaParentAdSourcesRouteHandler)
  .openapi(getV1betaParentAdUnitsRoute, getV1betaParentAdUnitsRouteHandler)
  .openapi(getV1betaParentAppsRoute, getV1betaParentAppsRouteHandler)
  .openapi(
    postV1betaParentMediationReportGenerateRoute,
    postV1betaParentMediationReportGenerateRouteHandler,
  )
  .openapi(
    postV1betaParentNetworkReportGenerateRoute,
    postV1betaParentNetworkReportGenerateRouteHandler,
  )

export default app
