import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ObsPipelinesPipelinesPipelineIdRoute,
  getApiV2ObsPipelinesPipelinesPipelineIdRoute,
  getApiV2ObsPipelinesPipelinesRoute,
  postApiV2ObsPipelinesPipelinesRoute,
  postApiV2ObsPipelinesPipelinesValidateRoute,
  putApiV2ObsPipelinesPipelinesPipelineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const observabilityPipelinesHandler = app
  .openapi(getApiV2ObsPipelinesPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ObsPipelinesPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ObsPipelinesPipelinesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ObsPipelinesPipelinesPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ObsPipelinesPipelinesPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ObsPipelinesPipelinesPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
