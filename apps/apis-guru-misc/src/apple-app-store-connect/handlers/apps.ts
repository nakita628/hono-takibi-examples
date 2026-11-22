import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppsIdRelationshipsBetaTestersRoute,
  getV1AppsIdAppInfosRoute,
  getV1AppsIdAppStoreVersionsRoute,
  getV1AppsIdAvailableTerritoriesRoute,
  getV1AppsIdBetaAppLocalizationsRoute,
  getV1AppsIdBetaAppReviewDetailRoute,
  getV1AppsIdBetaGroupsRoute,
  getV1AppsIdBetaLicenseAgreementRoute,
  getV1AppsIdBuildsRoute,
  getV1AppsIdEndUserLicenseAgreementRoute,
  getV1AppsIdGameCenterEnabledVersionsRoute,
  getV1AppsIdInAppPurchasesRoute,
  getV1AppsIdPerfPowerMetricsRoute,
  getV1AppsIdPreOrderRoute,
  getV1AppsIdPreReleaseVersionsRoute,
  getV1AppsIdPricesRoute,
  getV1AppsIdRoute,
  getV1AppsRoute,
  patchV1AppsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdAppInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdAppStoreVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdAvailableTerritoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaAppLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaAppReviewDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBetaLicenseAgreementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdEndUserLicenseAgreementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdGameCenterEnabledVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdInAppPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPerfPowerMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPreOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPreReleaseVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsIdPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsIdRelationshipsBetaTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
