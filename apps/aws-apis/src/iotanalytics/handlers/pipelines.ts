import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePipelinesPipelineNameReprocessingReprocessingIdRoute,
  deletePipelinesPipelineNameRoute,
  getPipelinesPipelineNameRoute,
  getPipelinesRoute,
  postPipelinesPipelineNameReprocessingRoute,
  postPipelinesRoute,
  putPipelinesPipelineNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipelinesHandler = app
  .openapi(deletePipelinesPipelineNameReprocessingReprocessingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePipelinesPipelineNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPipelinesPipelineNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPipelinesPipelineNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPipelinesPipelineNameReprocessingRoute, (c) => {
    throw new Error('Not implemented')
  })
