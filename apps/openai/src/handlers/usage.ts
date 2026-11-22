import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationCostsRoute,
  getOrganizationUsageAudioSpeechesRoute,
  getOrganizationUsageAudioTranscriptionsRoute,
  getOrganizationUsageCodeInterpreterSessionsRoute,
  getOrganizationUsageCompletionsRoute,
  getOrganizationUsageEmbeddingsRoute,
  getOrganizationUsageFileSearchCallsRoute,
  getOrganizationUsageImagesRoute,
  getOrganizationUsageModerationsRoute,
  getOrganizationUsageVectorStoresRoute,
  getOrganizationUsageWebSearchCallsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app
  .openapi(getOrganizationCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageAudioSpeechesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageAudioTranscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageCodeInterpreterSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageFileSearchCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageModerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageVectorStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUsageWebSearchCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
