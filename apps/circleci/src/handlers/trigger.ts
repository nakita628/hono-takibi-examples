import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdTriggersTriggerIdRoute,
  getProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
  getProjectsProjectIdTriggersTriggerIdRoute,
  patchProjectsProjectIdTriggersTriggerIdRoute,
  postProjectsProjectIdPipelineDefinitionsPipelineDefinitionIdTriggersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const triggerHandler = app
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
