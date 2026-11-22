import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1FlowsImageGenerationIdRoute,
  getV1FlowsImageRoute,
  getV1FlowsTemplatesRoute,
  getV1FlowsTemplatesTemplateIdRoute,
  getV1FlowsTemplatesTemplateIdRunsRoute,
  getV1FlowsTemplatesTemplateIdRunsRunIdRoute,
  getV1FlowsTextToSpeechGenerationIdRoute,
  getV1FlowsTextToSpeechRoute,
  getV1FlowsVideoGenerationIdRoute,
  getV1FlowsVideoRoute,
  postV1FlowsImageRoute,
  postV1FlowsTemplatesTemplateIdRunsRoute,
  postV1FlowsTextToSpeechRoute,
  postV1FlowsVideoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowsHandler = app
  .openapi(postV1FlowsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsVideoGenerationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsImageGenerationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsTextToSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTextToSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTextToSpeechGenerationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsTemplatesTemplateIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesTemplateIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesTemplateIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
