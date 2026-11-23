import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectorsIdRoute,
  deleteV1DatasetsIdRoute,
  deleteV1FinetuningFinetunedModelsIdRoute,
  getV1ConnectorsIdRoute,
  getV1ConnectorsRoute,
  getV1DatasetsIdRoute,
  getV1DatasetsRoute,
  getV1DatasetsUsageRoute,
  getV1EmbedJobsIdRoute,
  getV1EmbedJobsRoute,
  getV1FinetuningFinetunedModelsFinetunedModelIdEventsRoute,
  getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsRoute,
  getV1FinetuningFinetunedModelsIdRoute,
  getV1FinetuningFinetunedModelsRoute,
  getV1ModelsModelRoute,
  getV1ModelsRoute,
  getV2BatchesIdRoute,
  getV2BatchesRoute,
  patchV1ConnectorsIdRoute,
  patchV1FinetuningFinetunedModelsIdRoute,
  postV1ChatRoute,
  postV1CheckApiKeyRoute,
  postV1ClassifyRoute,
  postV1ConnectorsIdOauthAuthorizeRoute,
  postV1ConnectorsRoute,
  postV1DatasetsRoute,
  postV1DetokenizeRoute,
  postV1EmbedJobsIdCancelRoute,
  postV1EmbedJobsRoute,
  postV1EmbedRoute,
  postV1FinetuningFinetunedModelsRoute,
  postV1GenerateRoute,
  postV1RerankRoute,
  postV1SummarizeRoute,
  postV1TokenizeRoute,
  postV2AudioTranscriptionsRoute,
  postV2BatchesIdCancelRoute,
  postV2BatchesRoute,
  postV2ChatRoute,
  postV2EmbedRoute,
  postV2ParseRoute,
  postV2RerankRoute,
} from './routes'
import {
  deleteV1ConnectorsIdRouteHandler,
  deleteV1DatasetsIdRouteHandler,
  deleteV1FinetuningFinetunedModelsIdRouteHandler,
  getV1ConnectorsIdRouteHandler,
  getV1ConnectorsRouteHandler,
  getV1DatasetsIdRouteHandler,
  getV1DatasetsRouteHandler,
  getV1DatasetsUsageRouteHandler,
  getV1EmbedJobsIdRouteHandler,
  getV1EmbedJobsRouteHandler,
  getV1FinetuningFinetunedModelsFinetunedModelIdEventsRouteHandler,
  getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsRouteHandler,
  getV1FinetuningFinetunedModelsIdRouteHandler,
  getV1FinetuningFinetunedModelsRouteHandler,
  getV1ModelsModelRouteHandler,
  getV1ModelsRouteHandler,
  getV2BatchesIdRouteHandler,
  getV2BatchesRouteHandler,
  patchV1ConnectorsIdRouteHandler,
  patchV1FinetuningFinetunedModelsIdRouteHandler,
  postV1ChatRouteHandler,
  postV1CheckApiKeyRouteHandler,
  postV1ClassifyRouteHandler,
  postV1ConnectorsIdOauthAuthorizeRouteHandler,
  postV1ConnectorsRouteHandler,
  postV1DatasetsRouteHandler,
  postV1DetokenizeRouteHandler,
  postV1EmbedJobsIdCancelRouteHandler,
  postV1EmbedJobsRouteHandler,
  postV1EmbedRouteHandler,
  postV1FinetuningFinetunedModelsRouteHandler,
  postV1GenerateRouteHandler,
  postV1RerankRouteHandler,
  postV1SummarizeRouteHandler,
  postV1TokenizeRouteHandler,
  postV2AudioTranscriptionsRouteHandler,
  postV2BatchesIdCancelRouteHandler,
  postV2BatchesRouteHandler,
  postV2ChatRouteHandler,
  postV2EmbedRouteHandler,
  postV2ParseRouteHandler,
  postV2RerankRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1ChatRoute, postV1ChatRouteHandler)
  .openapi(postV2ChatRoute, postV2ChatRouteHandler)
  .openapi(postV2ParseRoute, postV2ParseRouteHandler)
  .openapi(postV1GenerateRoute, postV1GenerateRouteHandler)
  .openapi(postV1EmbedRoute, postV1EmbedRouteHandler)
  .openapi(postV2EmbedRoute, postV2EmbedRouteHandler)
  .openapi(postV2AudioTranscriptionsRoute, postV2AudioTranscriptionsRouteHandler)
  .openapi(getV2BatchesRoute, getV2BatchesRouteHandler)
  .openapi(postV2BatchesRoute, postV2BatchesRouteHandler)
  .openapi(getV2BatchesIdRoute, getV2BatchesIdRouteHandler)
  .openapi(postV2BatchesIdCancelRoute, postV2BatchesIdCancelRouteHandler)
  .openapi(postV1EmbedJobsRoute, postV1EmbedJobsRouteHandler)
  .openapi(getV1EmbedJobsRoute, getV1EmbedJobsRouteHandler)
  .openapi(getV1EmbedJobsIdRoute, getV1EmbedJobsIdRouteHandler)
  .openapi(postV1EmbedJobsIdCancelRoute, postV1EmbedJobsIdCancelRouteHandler)
  .openapi(postV1RerankRoute, postV1RerankRouteHandler)
  .openapi(postV2RerankRoute, postV2RerankRouteHandler)
  .openapi(postV1ClassifyRoute, postV1ClassifyRouteHandler)
  .openapi(postV1DatasetsRoute, postV1DatasetsRouteHandler)
  .openapi(getV1DatasetsRoute, getV1DatasetsRouteHandler)
  .openapi(getV1DatasetsUsageRoute, getV1DatasetsUsageRouteHandler)
  .openapi(getV1DatasetsIdRoute, getV1DatasetsIdRouteHandler)
  .openapi(deleteV1DatasetsIdRoute, deleteV1DatasetsIdRouteHandler)
  .openapi(postV1SummarizeRoute, postV1SummarizeRouteHandler)
  .openapi(postV1TokenizeRoute, postV1TokenizeRouteHandler)
  .openapi(postV1DetokenizeRoute, postV1DetokenizeRouteHandler)
  .openapi(getV1ConnectorsRoute, getV1ConnectorsRouteHandler)
  .openapi(postV1ConnectorsRoute, postV1ConnectorsRouteHandler)
  .openapi(getV1ConnectorsIdRoute, getV1ConnectorsIdRouteHandler)
  .openapi(patchV1ConnectorsIdRoute, patchV1ConnectorsIdRouteHandler)
  .openapi(deleteV1ConnectorsIdRoute, deleteV1ConnectorsIdRouteHandler)
  .openapi(postV1ConnectorsIdOauthAuthorizeRoute, postV1ConnectorsIdOauthAuthorizeRouteHandler)
  .openapi(getV1ModelsModelRoute, getV1ModelsModelRouteHandler)
  .openapi(getV1ModelsRoute, getV1ModelsRouteHandler)
  .openapi(postV1CheckApiKeyRoute, postV1CheckApiKeyRouteHandler)
  .openapi(getV1FinetuningFinetunedModelsRoute, getV1FinetuningFinetunedModelsRouteHandler)
  .openapi(postV1FinetuningFinetunedModelsRoute, postV1FinetuningFinetunedModelsRouteHandler)
  .openapi(patchV1FinetuningFinetunedModelsIdRoute, patchV1FinetuningFinetunedModelsIdRouteHandler)
  .openapi(getV1FinetuningFinetunedModelsIdRoute, getV1FinetuningFinetunedModelsIdRouteHandler)
  .openapi(
    deleteV1FinetuningFinetunedModelsIdRoute,
    deleteV1FinetuningFinetunedModelsIdRouteHandler,
  )
  .openapi(
    getV1FinetuningFinetunedModelsFinetunedModelIdEventsRoute,
    getV1FinetuningFinetunedModelsFinetunedModelIdEventsRouteHandler,
  )
  .openapi(
    getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsRoute,
    getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsRouteHandler,
  )

export default app
