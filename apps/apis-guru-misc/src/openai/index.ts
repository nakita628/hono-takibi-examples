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
} from './routes'
import {
  deleteFilesFileIdRouteHandler,
  deleteModelsModelRouteHandler,
  getEnginesEngineIdRouteHandler,
  getEnginesRouteHandler,
  getFilesFileIdContentRouteHandler,
  getFilesFileIdRouteHandler,
  getFilesRouteHandler,
  getFineTunesFineTuneIdEventsRouteHandler,
  getFineTunesFineTuneIdRouteHandler,
  getFineTunesRouteHandler,
  getModelsModelRouteHandler,
  getModelsRouteHandler,
  postAnswersRouteHandler,
  postAudioTranscriptionsRouteHandler,
  postAudioTranslationsRouteHandler,
  postChatCompletionsRouteHandler,
  postClassificationsRouteHandler,
  postCompletionsRouteHandler,
  postEditsRouteHandler,
  postEmbeddingsRouteHandler,
  postEnginesEngineIdSearchRouteHandler,
  postFilesRouteHandler,
  postFineTunesFineTuneIdCancelRouteHandler,
  postFineTunesRouteHandler,
  postImagesEditsRouteHandler,
  postImagesGenerationsRouteHandler,
  postImagesVariationsRouteHandler,
  postModerationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAnswersRoute, postAnswersRouteHandler)
  .openapi(postAudioTranscriptionsRoute, postAudioTranscriptionsRouteHandler)
  .openapi(postAudioTranslationsRoute, postAudioTranslationsRouteHandler)
  .openapi(postChatCompletionsRoute, postChatCompletionsRouteHandler)
  .openapi(postClassificationsRoute, postClassificationsRouteHandler)
  .openapi(postCompletionsRoute, postCompletionsRouteHandler)
  .openapi(postEditsRoute, postEditsRouteHandler)
  .openapi(postEmbeddingsRoute, postEmbeddingsRouteHandler)
  .openapi(getEnginesRoute, getEnginesRouteHandler)
  .openapi(getEnginesEngineIdRoute, getEnginesEngineIdRouteHandler)
  .openapi(postEnginesEngineIdSearchRoute, postEnginesEngineIdSearchRouteHandler)
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(deleteFilesFileIdRoute, deleteFilesFileIdRouteHandler)
  .openapi(getFilesFileIdRoute, getFilesFileIdRouteHandler)
  .openapi(getFilesFileIdContentRoute, getFilesFileIdContentRouteHandler)
  .openapi(getFineTunesRoute, getFineTunesRouteHandler)
  .openapi(postFineTunesRoute, postFineTunesRouteHandler)
  .openapi(getFineTunesFineTuneIdRoute, getFineTunesFineTuneIdRouteHandler)
  .openapi(postFineTunesFineTuneIdCancelRoute, postFineTunesFineTuneIdCancelRouteHandler)
  .openapi(getFineTunesFineTuneIdEventsRoute, getFineTunesFineTuneIdEventsRouteHandler)
  .openapi(postImagesEditsRoute, postImagesEditsRouteHandler)
  .openapi(postImagesGenerationsRoute, postImagesGenerationsRouteHandler)
  .openapi(postImagesVariationsRoute, postImagesVariationsRouteHandler)
  .openapi(getModelsRoute, getModelsRouteHandler)
  .openapi(deleteModelsModelRoute, deleteModelsModelRouteHandler)
  .openapi(getModelsModelRoute, getModelsModelRouteHandler)
  .openapi(postModerationsRoute, postModerationsRouteHandler)

export default app
