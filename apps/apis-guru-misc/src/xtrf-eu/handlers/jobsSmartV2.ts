import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2JobsForExternalIdRoute,
  getV2JobsJobIdFilesDeliveredRoute,
  getV2JobsJobIdFilesSharedReferenceFilesRoute,
  getV2JobsJobIdFilesSharedWorkFilesRoute,
  getV2JobsJobIdRoute,
  postV2JobsJobIdFilesAddExternalLinkRoute,
  postV2JobsJobIdFilesDeliveredAddLinkRoute,
  postV2JobsJobIdFilesDeliveredUploadRoute,
  putV2JobsJobIdDatesRoute,
  putV2JobsJobIdFilesDeliveredAddRoute,
  putV2JobsJobIdFilesSharedReferenceFilesShareRoute,
  putV2JobsJobIdFilesSharedWorkFilesShareRoute,
  putV2JobsJobIdFilesStopSharingRoute,
  putV2JobsJobIdInstructionsRoute,
  putV2JobsJobIdStatusRoute,
  putV2JobsJobIdVendorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsSmartV2Handler = app
  .openapi(getV2JobsForExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2JobsJobIdFilesAddExternalLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdFilesDeliveredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesDeliveredAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2JobsJobIdFilesDeliveredAddLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2JobsJobIdFilesDeliveredUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdFilesSharedReferenceFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesSharedReferenceFilesShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdFilesSharedWorkFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesSharedWorkFilesShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesStopSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdVendorRoute, (c) => {
    throw new Error('Not implemented')
  })
