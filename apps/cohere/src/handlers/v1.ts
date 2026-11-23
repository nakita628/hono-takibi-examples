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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1ChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmbedJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmbedJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmbedJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmbedJobsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RerankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SummarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DetokenizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorsIdOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CheckApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinetuningFinetunedModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinetuningFinetunedModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1FinetuningFinetunedModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinetuningFinetunedModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FinetuningFinetunedModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinetuningFinetunedModelsFinetunedModelIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
