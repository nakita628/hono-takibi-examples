import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute,
  deleteReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute,
  getOrgsOrgCodeScanningAiScanRoute,
  getOrgsOrgCodeScanningAlertsRoute,
  getReposOwnerRepoCodeScanningAiScanRoute,
  getReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute,
  getReposOwnerRepoCodeScanningAlertsAlertNumberInstancesRoute,
  getReposOwnerRepoCodeScanningAlertsAlertNumberRoute,
  getReposOwnerRepoCodeScanningAlertsRoute,
  getReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute,
  getReposOwnerRepoCodeScanningAnalysesRoute,
  getReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute,
  getReposOwnerRepoCodeScanningCodeqlDatabasesRoute,
  getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdReposRepoOwnerRepoNameRoute,
  getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdRoute,
  getReposOwnerRepoCodeScanningDefaultSetupRoute,
  getReposOwnerRepoCodeScanningSarifsSarifIdRoute,
  patchOrgsOrgCodeScanningAiScanRoute,
  patchReposOwnerRepoCodeScanningAiScanRoute,
  patchReposOwnerRepoCodeScanningAlertsAlertNumberRoute,
  patchReposOwnerRepoCodeScanningDefaultSetupRoute,
  postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixCommitsRoute,
  postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute,
  postReposOwnerRepoCodeScanningCodeqlVariantAnalysesRoute,
  postReposOwnerRepoCodeScanningSarifsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codeScanningHandler = app
  .openapi(getOrgsOrgCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsAlertNumberInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningCodeqlDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningCodeqlVariantAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdRoute,
    (c) => {},
  )
  .openapi(
    getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdReposRepoOwnerRepoNameRoute,
    (c) => {},
  )
  .openapi(getReposOwnerRepoCodeScanningDefaultSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeScanningDefaultSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningSarifsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningSarifsSarifIdRoute, (c) => {
    throw new Error('Not implemented')
  })
