import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  deleteProjectsProjectIdTriggersTriggerIdRoute,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
  getProjectsProjectIdPipelineDefinitionsRoute,
  getProjectsProjectIdTriggersTriggerIdRoute,
  patchProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdRoute,
  patchProjectsProjectIdTriggersTriggerIdRoute,
  postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
  postProjectsProjectIdPipelineDefinitionsRoute,
  postProjectsProjectIdRollbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
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
  .openapi(getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
