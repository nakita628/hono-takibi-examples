import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmPipelines202609ObjectTypePipelineIdRoute,
  deleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
  getCrmPipelines202609ObjectTypePipelineIdAuditRoute,
  getCrmPipelines202609ObjectTypePipelineIdRoute,
  getCrmPipelines202609ObjectTypePipelineIdStagesRoute,
  getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditRoute,
  getCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
  getCrmPipelines202609ObjectTypeRoute,
  patchCrmPipelines202609ObjectTypePipelineIdRoute,
  patchCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
  postCrmPipelines202609ObjectTypePipelineIdStagesRoute,
  postCrmPipelines202609ObjectTypeRoute,
  putCrmPipelines202609ObjectTypePipelineIdRoute,
  putCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmPipelines202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmPipelines202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelines202609ObjectTypePipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmPipelines202609ObjectTypePipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmPipelines202609ObjectTypePipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmPipelines202609ObjectTypePipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelines202609ObjectTypePipelineIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelines202609ObjectTypePipelineIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmPipelines202609ObjectTypePipelineIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
