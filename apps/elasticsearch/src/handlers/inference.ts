import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInferenceInferenceIdRoute,
  deleteInferenceRegionPolicyRoute,
  deleteInferenceTaskTypeInferenceIdRoute,
  getInferenceInferenceIdRoute,
  getInferenceRegionPolicyRoute,
  getInferenceRoute,
  getInferenceTaskTypeAllRoute,
  getInferenceTaskTypeInferenceIdRoute,
  postInferenceChatCompletionInferenceIdRoute,
  postInferenceChatCompletionInferenceIdStreamRoute,
  postInferenceCompletionInferenceIdRoute,
  postInferenceCompletionInferenceIdStreamRoute,
  postInferenceDecisionInferenceIdRoute,
  postInferenceDocumentExtractionInferenceIdRoute,
  postInferenceEmbeddingInferenceIdRoute,
  postInferenceInferenceIdRoute,
  postInferenceRerankInferenceIdRoute,
  postInferenceSparseEmbeddingInferenceIdRoute,
  postInferenceTaskTypeInferenceIdRoute,
  postInferenceTextEmbeddingInferenceIdRoute,
  putInferenceInferenceIdRoute,
  putInferenceInferenceIdUpdateRoute,
  putInferenceRegionPolicyRoute,
  putInferenceTaskTypeAi21InferenceIdRoute,
  putInferenceTaskTypeAlibabacloudInferenceIdRoute,
  putInferenceTaskTypeAmazonbedrockInferenceIdRoute,
  putInferenceTaskTypeAmazonsagemakerInferenceIdRoute,
  putInferenceTaskTypeAnthropicInferenceIdRoute,
  putInferenceTaskTypeAzureaistudioInferenceIdRoute,
  putInferenceTaskTypeAzureopenaiInferenceIdRoute,
  putInferenceTaskTypeCohereInferenceIdRoute,
  putInferenceTaskTypeContextualaiInferenceIdRoute,
  putInferenceTaskTypeCustomInferenceIdRoute,
  putInferenceTaskTypeDeepseekInferenceIdRoute,
  putInferenceTaskTypeElasticsearchInferenceIdRoute,
  putInferenceTaskTypeElserInferenceIdRoute,
  putInferenceTaskTypeFireworksaiInferenceIdRoute,
  putInferenceTaskTypeGoogleaistudioInferenceIdRoute,
  putInferenceTaskTypeGooglevertexaiInferenceIdRoute,
  putInferenceTaskTypeGroqInferenceIdRoute,
  putInferenceTaskTypeHuggingfaceInferenceIdRoute,
  putInferenceTaskTypeInferenceIdRoute,
  putInferenceTaskTypeInferenceIdUpdateRoute,
  putInferenceTaskTypeJinaaiInferenceIdRoute,
  putInferenceTaskTypeLlamaInferenceIdRoute,
  putInferenceTaskTypeMistralInferenceIdRoute,
  putInferenceTaskTypeNvidiaInferenceIdRoute,
  putInferenceTaskTypeOpenaiInferenceIdRoute,
  putInferenceTaskTypeOpenshiftaiInferenceIdRoute,
  putInferenceTaskTypeVoyageaiInferenceIdRoute,
  putInferenceTaskTypeWatsonxInferenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inferenceHandler = app
  .openapi(postInferenceChatCompletionInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceChatCompletionInferenceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceCompletionInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceDecisionInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInferenceInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInferenceInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInferenceTaskTypeInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceTaskTypeInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInferenceTaskTypeInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInferenceRegionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceRegionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInferenceRegionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceDocumentExtractionInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceEmbeddingInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInferenceTaskTypeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeAi21InferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeAlibabacloudInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeAmazonbedrockInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeAmazonsagemakerInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeAnthropicInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeAzureaistudioInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeAzureopenaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeCohereInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeContextualaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeCustomInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeDeepseekInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeElasticsearchInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeElserInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeFireworksaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeGoogleaistudioInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeGooglevertexaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeGroqInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeHuggingfaceInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeJinaaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeLlamaInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeMistralInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeNvidiaInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeOpenaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeOpenshiftaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeVoyageaiInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeWatsonxInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceRerankInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceSparseEmbeddingInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceCompletionInferenceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInferenceTextEmbeddingInferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceInferenceIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInferenceTaskTypeInferenceIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
