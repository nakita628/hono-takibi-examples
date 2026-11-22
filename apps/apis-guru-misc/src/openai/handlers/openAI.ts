import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdRoute,
  deleteModelsModelRoute,
  getEnginesEngineIdRoute,
  getEnginesRoute,
  getFilesFileIdContentRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  getFineTunesFineTuneIdEventsRoute,
  getFineTunesFineTuneIdRoute,
  getFineTunesRoute,
  getModelsModelRoute,
  getModelsRoute,
  postAnswersRoute,
  postAudioTranscriptionsRoute,
  postAudioTranslationsRoute,
  postChatCompletionsRoute,
  postClassificationsRoute,
  postCompletionsRoute,
  postEditsRoute,
  postEmbeddingsRoute,
  postEnginesEngineIdSearchRoute,
  postFilesRoute,
  postFineTunesFineTuneIdCancelRoute,
  postFineTunesRoute,
  postImagesEditsRoute,
  postImagesGenerationsRoute,
  postImagesVariationsRoute,
  postModerationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const openAIHandler = app
  .openapi(postAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioTranscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnginesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnginesEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnginesEngineIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTunesFineTuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTunesFineTuneIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTunesFineTuneIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesGenerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesVariationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
