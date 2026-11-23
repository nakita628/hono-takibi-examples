import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BatchesBatchIdResultsRoute,
  getV1BatchesBatchIdRoute,
  getV1BatchesRoute,
  getV1ConsentEnvironmentIdRoute,
  getV1ConsentRoute,
  getV1ModelsRoute,
  getV1SignalsAgentsEnvironmentIdSessionsRoute,
  getV1SignalsDeletionsDeletionIdRoute,
  getV1SignalsDeletionsRoute,
  getV1SignalsExportsExportIdDownloadRoute,
  getV1SignalsExportsExportIdRoute,
  getV1SignalsExportsOptionsRoute,
  getV1SignalsExportsRoute,
  getV1SignalsSessionsSessionIdDialoguesRoute,
  getV1VideosVideoIdContentRoute,
  getV1VideosVideoIdRoute,
  postV1AsyncInvokeRoute,
  postV1AudioSpeechRoute,
  postV1BatchesBatchIdCancelRoute,
  postV1BatchesFilesRoute,
  postV1BatchesRoute,
  postV1ChatCompletionsRoute,
  postV1EmbeddingsRoute,
  postV1ImagesGenerationsRoute,
  postV1MessagesRoute,
  postV1ResponsesRoute,
  postV1SignalsDeletionsRoute,
  postV1SignalsExportsRoute,
  postV1SystemoneRoute,
  postV1VideosRoute,
  putV1ConsentEnvironmentIdRoute,
  putV1ConsentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConsentEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsAgentsEnvironmentIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsSessionsSessionIdDialoguesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SignalsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsExportsOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsExportsExportIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsDeletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SignalsDeletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SignalsDeletionsDeletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ImagesGenerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SystemoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AsyncInvokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VideosVideoIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
