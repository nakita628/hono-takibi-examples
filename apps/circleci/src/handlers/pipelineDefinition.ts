import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  getProjectsProjectIdPipelineDefinitionsRoute,
  patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  postProjectsProjectIdPipelineDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipelineDefinitionHandler = app
  .openapi(getProjectsProjectIdPipelineDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdPipelineDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
