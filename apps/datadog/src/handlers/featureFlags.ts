import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2FeatureFlagsEnvironmentsEnvironmentIdRoute,
  deleteApiV2FeatureFlagsFeatureFlagIdVariantsVariantIdRoute,
  getApiV2FeatureFlagsEnvironmentsEnvironmentIdRoute,
  getApiV2FeatureFlagsEnvironmentsRoute,
  getApiV2FeatureFlagsFeatureFlagIdRoute,
  getApiV2FeatureFlagsHistoryExportRoute,
  getApiV2FeatureFlagsHistoryRoute,
  getApiV2FeatureFlagsRoute,
  getApiV2FeatureFlagsSavedFiltersSavedFilterIdRoute,
  patchApiV2FeatureFlagsSavedFiltersSavedFilterIdRoute,
  postApiV2FeatureFlagsEnvironmentsRoute,
  postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdPauseRoute,
  postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdResumeRoute,
  postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdStartRoute,
  postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdStopRoute,
  postApiV2FeatureFlagsFeatureFlagIdArchiveRoute,
  postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdAllocationsRoute,
  postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdDisableRoute,
  postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdEnableRoute,
  postApiV2FeatureFlagsFeatureFlagIdUnarchiveRoute,
  postApiV2FeatureFlagsFeatureFlagIdVariantsRoute,
  postApiV2FeatureFlagsRoute,
  putApiV2FeatureFlagsEnvironmentsEnvironmentIdRoute,
  putApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdAllocationsRoute,
  putApiV2FeatureFlagsFeatureFlagIdRoute,
  putApiV2FeatureFlagsFeatureFlagIdVariantsVariantIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsHandler = app
  .openapi(getApiV2FeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeatureFlagsEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FeatureFlagsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeatureFlagsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FeatureFlagsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsExposureSchedulesExposureScheduleIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeatureFlagsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeatureFlagsHistoryExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeatureFlagsSavedFiltersSavedFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FeatureFlagsSavedFiltersSavedFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FeatureFlagsFeatureFlagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FeatureFlagsFeatureFlagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsFeatureFlagIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsFeatureFlagIdEnvironmentsEnvironmentIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsFeatureFlagIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FeatureFlagsFeatureFlagIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FeatureFlagsFeatureFlagIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2FeatureFlagsFeatureFlagIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
