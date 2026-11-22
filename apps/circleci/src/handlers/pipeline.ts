import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPipelinePipelineIdConfigRoute,
  getPipelinePipelineIdRoute,
  getPipelinePipelineIdValuesRoute,
  getPipelinePipelineIdWorkflowRoute,
  getPipelineRoute,
  getProjectProjectSlugPipelineMineRoute,
  getProjectProjectSlugPipelinePipelineNumberRoute,
  getProjectProjectSlugPipelineRoute,
  postPipelineContinueRoute,
  postProjectProjectSlugPipelineRoute,
  postProjectProviderOrganizationProjectPipelineRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipelineHandler = app
  .openapi(getPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPipelineContinueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPipelinePipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPipelinePipelineIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPipelinePipelineIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugPipelineMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugPipelinePipelineNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProviderOrganizationProjectPipelineRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPipelinePipelineIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
