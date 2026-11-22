import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ExperimentsIdRoute,
  deleteV1ExperimentsIdVariationVariationIdScreenshotRoute,
  getV1ExperimentNamesRoute,
  getV1ExperimentsIdResultsRoute,
  getV1ExperimentsIdRoute,
  getV1ExperimentsIdStartChecklistRoute,
  getV1ExperimentsResultsRoute,
  getV1ExperimentsRoute,
  postV1ExperimentsIdArchiveRoute,
  postV1ExperimentsIdCommentRoute,
  postV1ExperimentsIdModifyTemporaryRolloutRoute,
  postV1ExperimentsIdRoute,
  postV1ExperimentsIdSnapshotRoute,
  postV1ExperimentsIdStartChecklistManualCompleteRoute,
  postV1ExperimentsIdStartRoute,
  postV1ExperimentsIdStopRoute,
  postV1ExperimentsIdUnarchiveRoute,
  postV1ExperimentsIdVariationVariationIdScreenshotUploadRoute,
  postV1ExperimentsRoute,
  putV1ExperimentsIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(getV1ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsIdStartChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdStartChecklistManualCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ExperimentsIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdModifyTemporaryRolloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdVariationVariationIdScreenshotUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsIdVariationVariationIdScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
