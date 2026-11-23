import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaAccountsRoute,
  getV1betaNameRoute,
  getV1betaParentAdSourcesRoute,
  getV1betaParentAdUnitsRoute,
  getV1betaParentAppsRoute,
  postV1betaParentMediationReportGenerateRoute,
  postV1betaParentNetworkReportGenerateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app
  .openapi(getV1betaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentAdSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentAdUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentMediationReportGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentNetworkReportGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
