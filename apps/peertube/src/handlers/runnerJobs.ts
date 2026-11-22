import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RunnersJobsJobUUIDRoute,
  getApiV1RunnersJobsRoute,
  postApiV1RunnersJobsJobUUIDAbortRoute,
  postApiV1RunnersJobsJobUUIDAcceptRoute,
  postApiV1RunnersJobsJobUUIDCancelRoute,
  postApiV1RunnersJobsJobUUIDErrorRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameRoute,
  postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityRoute,
  postApiV1RunnersJobsJobUUIDSuccessRoute,
  postApiV1RunnersJobsJobUUIDUpdateRoute,
  postApiV1RunnersJobsRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnerJobsHandler = app
  .openapi(postApiV1RunnersJobsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDSuccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDMaxQualityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDThumbnailsMaxQualityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDPreviewsMaxQualityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDFilesVideosVideoIdOrUUIDStudioTaskFilesFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersJobsJobUUIDCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RunnersJobsJobUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RunnersJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
