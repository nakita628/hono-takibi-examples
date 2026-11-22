import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgSecretScanningCustomPatternsRoute,
  deleteReposOwnerRepoSecretScanningCustomPatternsRoute,
  getOrgsOrgSecretScanningAlertsRoute,
  getOrgsOrgSecretScanningCustomPatternsRoute,
  getOrgsOrgSecretScanningPatternConfigurationsRoute,
  getReposOwnerRepoSecretScanningAlertsAlertNumberLocationsRoute,
  getReposOwnerRepoSecretScanningAlertsAlertNumberRoute,
  getReposOwnerRepoSecretScanningAlertsRoute,
  getReposOwnerRepoSecretScanningCustomPatternsRoute,
  getReposOwnerRepoSecretScanningScanHistoryRoute,
  patchOrgsOrgSecretScanningCustomPatternsPatternIdRoute,
  patchOrgsOrgSecretScanningPatternConfigurationsRoute,
  patchReposOwnerRepoSecretScanningAlertsAlertNumberRoute,
  patchReposOwnerRepoSecretScanningCustomPatternsPatternIdRoute,
  postOrgsOrgSecretScanningCustomPatternsRoute,
  postReposOwnerRepoSecretScanningCustomPatternsRoute,
  postReposOwnerRepoSecretScanningPushProtectionBypassesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretScanningHandler = app
  .openapi(getOrgsOrgSecretScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgSecretScanningCustomPatternsPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSecretScanningPatternConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgSecretScanningPatternConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecretScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningAlertsAlertNumberLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecretScanningCustomPatternsPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecretScanningPushProtectionBypassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningScanHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
