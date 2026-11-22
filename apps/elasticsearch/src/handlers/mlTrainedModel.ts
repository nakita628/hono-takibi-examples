import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMlTrainedModelsModelIdModelAliasesModelAliasRoute,
  deleteMlTrainedModelsModelIdRoute,
  getMlTrainedModelsModelIdRoute,
  getMlTrainedModelsModelIdStatsRoute,
  getMlTrainedModelsRoute,
  getMlTrainedModelsStatsRoute,
  postMlTrainedModelsModelIdDeploymentCacheClearRoute,
  postMlTrainedModelsModelIdDeploymentStartRoute,
  postMlTrainedModelsModelIdDeploymentStopRoute,
  postMlTrainedModelsModelIdDeploymentUpdateRoute,
  postMlTrainedModelsModelIdInferRoute,
  putMlTrainedModelsModelIdDefinitionPartRoute,
  putMlTrainedModelsModelIdModelAliasesModelAliasRoute,
  putMlTrainedModelsModelIdRoute,
  putMlTrainedModelsModelIdVocabularyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mlTrainedModelHandler = app
  .openapi(postMlTrainedModelsModelIdDeploymentCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlTrainedModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdModelAliasesModelAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlTrainedModelsModelIdModelAliasesModelAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsModelIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlTrainedModelsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdInferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdDefinitionPartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlTrainedModelsModelIdVocabularyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdDeploymentStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdDeploymentStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlTrainedModelsModelIdDeploymentUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
