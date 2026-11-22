import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SyntheticsDowntimesDowntimeIdRoute,
  deleteApiV2SyntheticsDowntimesDowntimeIdTestsTestIdRoute,
  getApiV2SyntheticsApiMultistepSubtestsPublicIdParentsRoute,
  getApiV2SyntheticsApiMultistepSubtestsPublicIdRoute,
  getApiV2SyntheticsDowntimesDowntimeIdRoute,
  getApiV2SyntheticsDowntimesRoute,
  getApiV2SyntheticsSettingsOnDemandConcurrencyCapRoute,
  getApiV2SyntheticsSuitesPublicIdRoute,
  getApiV2SyntheticsSuitesSearchRoute,
  getApiV2SyntheticsTestsBrowserPublicIdResultsResultIdRoute,
  getApiV2SyntheticsTestsBrowserPublicIdResultsRoute,
  getApiV2SyntheticsTestsFastIdRoute,
  getApiV2SyntheticsTestsNetworkPublicIdRoute,
  getApiV2SyntheticsTestsPollResultsRoute,
  getApiV2SyntheticsTestsPublicIdParentSuitesRoute,
  getApiV2SyntheticsTestsPublicIdResultsResultIdRoute,
  getApiV2SyntheticsTestsPublicIdResultsRoute,
  getApiV2SyntheticsTestsPublicIdVersionHistoryRoute,
  getApiV2SyntheticsTestsPublicIdVersionHistoryVersionNumberRoute,
  patchApiV2SyntheticsSuitesPublicIdJsonpatchRoute,
  patchApiV2SyntheticsVariablesVariableIdJsonpatchRoute,
  postApiV2SyntheticsDowntimesRoute,
  postApiV2SyntheticsSettingsOnDemandConcurrencyCapRoute,
  postApiV2SyntheticsSuitesBulkDeleteRoute,
  postApiV2SyntheticsSuitesRoute,
  postApiV2SyntheticsTestsBulkDeleteRoute,
  postApiV2SyntheticsTestsNetworkRoute,
  postApiV2SyntheticsTestsPublicIdFilesDownloadRoute,
  postApiV2SyntheticsTestsPublicIdFilesMultipartPresignedUrlsRoute,
  postApiV2SyntheticsTestsPublicIdFilesMultipartUploadAbortRoute,
  postApiV2SyntheticsTestsPublicIdFilesMultipartUploadCompleteRoute,
  putApiV2SyntheticsDowntimesDowntimeIdRoute,
  putApiV2SyntheticsDowntimesDowntimeIdTestsTestIdRoute,
  putApiV2SyntheticsSuitesPublicIdRoute,
  putApiV2SyntheticsTestsNetworkPublicIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syntheticsHandler = app
  .openapi(getApiV2SyntheticsApiMultistepSubtestsPublicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsApiMultistepSubtestsPublicIdParentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsDowntimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsDowntimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SyntheticsDowntimesDowntimeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsDowntimesDowntimeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SyntheticsDowntimesDowntimeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SyntheticsDowntimesDowntimeIdTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SyntheticsDowntimesDowntimeIdTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsSettingsOnDemandConcurrencyCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsSettingsOnDemandConcurrencyCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsSuitesBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsSuitesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsSuitesPublicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SyntheticsSuitesPublicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SyntheticsSuitesPublicIdJsonpatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsBrowserPublicIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsBrowserPublicIdResultsResultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsTestsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsFastIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsTestsNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsNetworkPublicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SyntheticsTestsNetworkPublicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsPollResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsTestsPublicIdFilesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsTestsPublicIdFilesMultipartPresignedUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsTestsPublicIdFilesMultipartUploadAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SyntheticsTestsPublicIdFilesMultipartUploadCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsPublicIdParentSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsPublicIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsPublicIdResultsResultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsPublicIdVersionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SyntheticsTestsPublicIdVersionHistoryVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SyntheticsVariablesVariableIdJsonpatchRoute, (c) => {
    throw new Error('Not implemented')
  })
