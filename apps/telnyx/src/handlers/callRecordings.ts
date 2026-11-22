import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomStorageCredentialsConnectionIdRoute,
  deleteRecordingsRecordingIdRoute,
  deleteRecordingTranscriptionsRecordingTranscriptionIdRoute,
  getCustomStorageCredentialsConnectionIdRoute,
  getRecordingsRecordingIdRoute,
  getRecordingsRoute,
  getRecordingTranscriptionsRecordingTranscriptionIdRoute,
  getRecordingTranscriptionsRoute,
  postCustomStorageCredentialsConnectionIdRoute,
  postRecordingsActionsDeleteRoute,
  putCustomStorageCredentialsConnectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callRecordingsHandler = app
  .openapi(deleteCustomStorageCredentialsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomStorageCredentialsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomStorageCredentialsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomStorageCredentialsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingTranscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordingTranscriptionsRecordingTranscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingTranscriptionsRecordingTranscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordingsActionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordingsRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingsRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
