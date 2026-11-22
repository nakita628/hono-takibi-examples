import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2GovernanceConfigRoute,
  getApiV2GovernanceControlDetectionTypeDetectionsRoute,
  getApiV2GovernanceControlDetectionTypeNotificationSettingsRoute,
  getApiV2GovernanceControlDetectionTypeRoute,
  getApiV2GovernanceControlRoute,
  getApiV2GovernanceDetectionsDetectionIdRoute,
  getApiV2GovernanceInsightsRoute,
  getApiV2GovernanceNotificationSettingsRoute,
  patchApiV2GovernanceControlDetectionTypeRoute,
  patchApiV2GovernanceDetectionsDetectionIdRoute,
  patchApiV2GovernanceNotificationSettingsRoute,
  postApiV2GovernanceDetectionsMitigateRoute,
  putApiV2GovernanceControlDetectionTypeNotificationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const governanceConsoleHandler = app
  .openapi(getApiV2GovernanceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceControlDetectionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2GovernanceControlDetectionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceControlDetectionTypeDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceControlDetectionTypeNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GovernanceControlDetectionTypeNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GovernanceDetectionsMitigateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceDetectionsDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2GovernanceDetectionsDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2GovernanceNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
