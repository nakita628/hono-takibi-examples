import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiQualitySettingsRequirementsIdRoute,
  getApiQualityConflictsRoute,
  getApiQualityReportsIdConfusionMatrixRoute,
  getApiQualityReportsIdConfusionRoute,
  getApiQualityReportsIdDataRoute,
  getApiQualityReportsIdRoute,
  getApiQualityReportsRoute,
  getApiQualitySettingsIdRoute,
  getApiQualitySettingsRequirementsIdRoute,
  getApiQualitySettingsRequirementsRoute,
  getApiQualitySettingsRoute,
  patchApiQualitySettingsIdRoute,
  patchApiQualitySettingsRequirementsIdRoute,
  postApiQualityReportsRoute,
  postApiQualitySettingsRequirementsBulkRoute,
  postApiQualitySettingsRequirementsRoute,
  putApiQualitySettingsIdRoute,
  putApiQualitySettingsRequirementsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qualityHandler = app
  .openapi(getApiQualityConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQualityReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdConfusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdConfusionMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualityReportsIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiQualitySettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiQualitySettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQualitySettingsRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiQualitySettingsRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiQualitySettingsRequirementsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
